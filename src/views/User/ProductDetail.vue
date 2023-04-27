<template>
  <div class="container">
    <toast></toast>
    <div class="goBack">
      <img class="goBack-icon" src="@/assets/images/back.svg" alt="" />
      <RouterLink
        class="goBack-link"
        :to="{
          name: 'product-list'
        }"
        >返回產品列表</RouterLink
      >
    </div>
    <div class="product-detail">
      <div class="product-detail-img">
        <!-- <img :src="tempProduct.imageUrl" alt="" /> -->
        <div
          :style="{
            background:
              'transparent url(' + tempProduct.imageUrl + ') no-repeat center center / contain',
            border: '1px solid transparent',
          }" class="product-detail-img-item"
        ></div>
      </div>
      <div class="product-detail-content">
        <div class="product-detail-categroy">{{ tempProduct.category }}</div>
        <div class="product-detail-title">{{ tempProduct.title }}</div>
        <div class="product-detail-txt">
          {{ tempProduct.content }}
        </div>
        <div class="product-detail-description">
          <div class="product-detail-description-title">商品尺寸</div>
          <div class="product-detail-description-txt">{{ tempProduct.description }}</div>
        </div>
        <div class="product-detail-description">
          <div class="product-detail-description-title">商品交期</div>
          <div class="product-detail-description-txt">
            預購商品：需等待約 1 - 3 月<br />
            現貨商品：約 2 - 3 週運送時間
          </div>
        </div>
        <div class="product-detail-addBox">
          <select name="" id="" class="addBox-select" v-model.number="qty">
            <option :value="i" v-for="i in 20" :key="i + '12344'">
              {{ i }}
            </option>
          </select>
          <button
            type="button"
            class="btn btn-m btn-secondary"
            @click="addCart(tempProduct.id, qty)"
          >
            加入購物車
          </button>
        </div>
        <div class="product-detail-info">
          <p class="product-detail-info-title">注意事項</p>
          <ul class="product-detail-info-list">
            <li class="product-detail-info-txt">
              訂單不限金額一般地區免運，非一般地區運費折抵$150（加入購物車會自動折抵）
            </li>
            <li class="product-detail-info-txt">
              如遇樓層搬運狀況，將收取勞務費$50/層（人工另行收取）
            </li>
            <li class="product-detail-info-txt">規格品，享二年結構性保固；其他請參考購物須知</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { useToastMessageStore } from '../../stores/toastStores'
import axios from 'axios'
import Toast from '@/components/Toast.vue'

export default {
  props: ['productId'],
  data() {
    return {
      id: this.$route.params.productId,
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      tempProduct: {},
      qty: 1
    }
  },
  components: {
    Toast
  },
  methods: {
    // 使用 mapAction 取得 Pinia 的方法
    ...mapActions(useToastMessageStore, ['pushMessage']),
    getData() {
      axios
        .get(`${this.url}api/${this.api_path}/product/${this.id}`)
        .then((res) => {
          this.tempProduct = res.data.product
        })
        .catch((err) => {
          this.pushMessage({
            style: 'error',
            content: err.response.data.message
          })
        })
    },
    addCart(product_id, qty = 1) {
      const data = {
        product_id,
        qty
      }
      axios
        .post(`${this.url}api/${this.api_path}/cart`, { data })
        .then(() => {
          this.pushMessage({
            style: 'success',
            content: '已加入購物車囉'
          })
        })
        .catch((err) => {
          this.pushMessage({
            style: 'error',
            content: err.response.data.message
          })
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
