<template>
  <div class="product-list">
    <div class="product-list-bg">
      <div class="page-title">
        design
        <span class="page-sub-title"
          >with heart,<br />
          only for yourlike
        </span>
      </div>
    </div>
    <div class="container">
      <div class="product-hot">
        <div class="product-title">
          熱門商品
          <span class="product-title-en">HOT</span>
        </div>
        <ul class="product-card hot">
          <li class="product-card-item" v-for="item in hotProducts" :key="item.id">
            <img class="product-card-img" :src="item.imageUrl" alt="" />
            <div class="product-card-title">{{ item.title }}</div>
            <div class="product-card-category">椅子</div>
          </li>
        </ul>
      </div>
      <div class="product-all">
        <!-- <ul class="product-menu">
          <li class="product-menu-link active">全部</li>
          <li class="product-menu-link">椅子</li>
          <li class="product-menu-link">沙發</li>
          <li class="product-menu-link">櫃子</li>
          <li class="product-menu-link">桌子</li>
        </ul> -->
        <!-- <product-list-all class="mt-10" :products="products"></product-list-all> -->
        <ul class="product-card mt-10">
          <li class="product-card-item" v-for="item in products" :key="item.id" @click="goProductDetail(item.id)">
            <div class="product-card-img">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div class="product-card-title">{{ item.title }}</div>
            <div class="product-card-price">$ {{ item.price }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListAll from '@/components/ProductListAll.vue'
import axios from 'axios'

export default {
  components: {
    ProductListAll
  },
  data() {
    return {
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      products: {},
      hotProducts: {}
    }
  },
  methods: {
    // 取得產品列表
    getData() {
      axios
        .get(`${this.url}api/${this.api_path}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.hotProducts = this.products.slice(-3)
          console.log('產品列表：', this.products, this.hotProducts)
        })
        .catch((err) => {
          alert(err)
        })
    },
    // 開啟產品資訊
    goProductDetail(productId){
      this.$router.push(`product-detail/${productId}`)
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
