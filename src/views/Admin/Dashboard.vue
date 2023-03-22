<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="{'overflow-y-hid':showComponent}">
    <del-product-vue
      v-show="showComponent"
      :temp-product="tempProduct"
      :close-modal="closeModal"
      :del-product="delProduct"
    ></del-product-vue>
    <button type="button" class="btn btn-m margin-right" @click="goDetail('add', item)">
      新增產品
    </button>
    <div class="table">
      <ul class="table-head">
        <li class="table-head-item w-1">分類</li>
        <li class="table-head-item w-5">產品名稱</li>
        <li class="table-head-item w-1 text-right">原價</li>
        <li class="table-head-item w-1 text-right">售價</li>
        <li class="table-head-item w-1 text-center">是否啟用</li>
        <li class="table-head-item w-1 text-center">操作</li>
      </ul>
      <ul class="table-body">
        <li v-for="item in products" :key="item.id" class="table-body-item">
          <div class="table-body-data w-1">{{ item.category }}</div>
          <div class="table-body-data w-5">{{ item.title }}</div>
          <div class="table-body-data w-1 text-right">$ {{ item.origin_price }}</div>
          <div class="table-body-data w-1 text-right">$ {{ item.price }}</div>
          <div class="table-body-data w-1 text-center text-primary">
            {{ item.is_enabled ? '啟用' : '未啟用' }}
          </div>
          <div class="table-body-data table-btn w-1 text-center">
            <button type="button" class="btn btn-s btn-secondary" @click="goDetail('edit', item)">
              編輯
            </button>
            <button
              type="button"
              class="btn btn-s btn-secondary-outline"
              @click="goDetail('delete', item)"
            >
              刪除
            </button>
          </div>
        </li>
      </ul>
    </div>
    <pagination :get-product="getProduct" :pages="page"></pagination>
  </div>
</template>

<script>
import axios from 'axios';
import delProductVue from '@/components/DelProduct.vue';
import pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      products: {},
      tempProduct: {
        imagesUrl: []
      },
      tempUploadImg: {}, //上傳圖片檔案
      isNew: false,
      page: {},
      showComponent: false
    }
  },
  methods: {
    getProduct(page = 1) {
      axios
        .get(`${this.url}api/${this.api_path}/admin/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
          console.log('取得產品列表', this.products)
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    goDetail(status, item) {
      if (status === 'add') {
        this.isNew = true

        this.tempProduct = {
          imagesUrl: []
        }

        this.$router.push({
          path: `dashboard-product-detail/${this.tempProduct.id}/${this.isNew}`
        })
      } else if (status === 'edit') {
        // 當入當前資料
        this.tempProduct = { ...item }

        this.$router.push({
          path: `dashboard-product-detail/${this.tempProduct.id}/${this.isNew}`
        })
      } else if (status === 'delete') {
        this.showComponent = true
        this.tempProduct = { ...item } //取資料內id
      }
    },
    // 關閉modal
    closeModal() {
      this.showComponent = false
    },
    delProduct() {
      axios
        .delete(`${this.url}api/${this.api_path}/admin/product/${this.tempProduct.id}`) //api資料結構在data裡
        .then(() => {
          this.getProduct()
          this.closeModal()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
  },
  watch:{
    // 監聽modal：若是為開啟狀態body則無法滾動
    showComponent: function(status){
      if(status === true){
        document.body.classList.add('overflow-y-hid');
      }else{
        document.body.classList.remove('overflow-y-hid');
      }
    }
  },
  components: {
    delProductVue,
    pagination
  },

  mounted() {
    // eslint-disable-next-line no-useless-escape
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)rita009\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    // https://github.com/axios/axios#global-axios-defaults
    axios.defaults.headers.common['Authorization'] = token
    this.getProduct()
  }
}
</script>
