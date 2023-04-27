<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <toast></toast>
    <div class="goBack" v-if="cart.carts ? cart.carts.length : false">
      <img class="goBack-icon" src="@/assets/images/back.svg" alt="" />

      <RouterLink
        class="goBack-link"
        :to="{
          name: 'product-list'
        }"
        >繼續購物</RouterLink
      >
    </div>
    <div class="page-title">Your cart</div>
    <!-- <div class="" v-if="cart.carts.length">sssss</div> -->
    
    <div class="flexBlock" v-if="cart.carts ? cart.carts.length : false">
      <div class="flexBlock-left w-7">
        <button type="button" class="btn btn-m btn-secondary-outline" @click="deleteAllCart">
          刪除全部品項
        </button>
        <div class="carts-list" v-for="item in cart.carts" :key="item.id">
          <div class="w-7 carts-list-box">
            <div class="carts-delItem" @click="deleteCartData(item.id)"></div>
            <div class="carts-img">
              <img :src="item.product.imageUrl" alt="" />
            </div>

            <div class="carts-content">
              <div class="carts-content-title">{{ item.product.title }}</div>
              <!-- <div class="carts-content-txt">長：47cm 寬：51cm 高：90cm</div> -->
            </div>
          </div>
          <div class="w-3 carts-list-box">
            <div class="product-detail-addBox">
              <select
                name=""
                id=""
                v-model="item.qty"
                @change="updatedCart(item)"
                class="addBox-select"
              >
                <option :value="i" v-for="i in 20" :key="i + '12344'">
                  {{ i }}
                </option>
              </select>
            </div>
            <div class="carts-price">
              <div class="carts-price-final">$ {{ item.final_total }}</div>
              <div class="carts-price-origin">$ {{ item.product.origin_price * item.qty }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flexBlock-right w-3">
        <div class="page-title">summery</div>
        <div class="summery">
          <div class="summery-list">
            <p class="summery-list-title">小計</p>
            <p class="summery-list-txt">$ {{ cart.total }}</p>
          </div>
          <div class="summery-list">
            <p class="summery-list-title">運費（不含搬運上樓）</p>
            <p class="summery-list-txt">免運</p>
          </div>
        </div>
        <div class="summery-total">
          <div class="summery-list">
            <p class="summery-list-title">折扣後<span>總金額</span></p>
            <p class="summery-list-txt">$ {{ cart.final_total }}</p>
          </div>
        </div>
        <!-- <div class="btn btn-lg btn-secondary mt-5">立即結帳</div> -->
        <RouterLink
          :to="{
            name: 'send-order'
          }"
          class="btn btn-lg btn-secondary mt-5"
          >立即結帳</RouterLink
        >
      </div>
    </div>
    <div class="text-center carts-nothing" v-else>
      <h3 class="carts-nothing-txt">尚未有商品加入購物車唷</h3>
      <!-- <button type="button" class="btn btn-secondary btn-lg mt-8">前往購物</button> -->
      <RouterLink
        class="btn btn-secondary btn-lg mt-8"
        :to="{
          name: 'product-list'
        }"
        >前往購物</RouterLink
      >
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia'
import { useToastMessageStore } from '../../stores/toastStores'
import axios from 'axios'
import Toast from '@/components/Toast.vue'

export default {
  data() {
    return {
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      cart: {}
    }
  },
  components: {
    Toast
  },
  methods: {
    // 使用 mapAction 取得 Pinia 的方法
    ...mapActions(useToastMessageStore, ['pushMessage']),
    // 取得購物車
    getCarts() {
      axios
        .get(`${this.url}api/${this.api_path}/cart`)
        .then((res) => {
          this.cart = res.data.data
          console.log('購物車',this.cart,this.cart.carts.length);
          
        })
        .catch((err) => {
          this.pushMessage({
            style: 'error',
            content: err.response.data.message
          })
        })
    },
    // 更新購物車
    updatedCart(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      axios
        .put(`${this.url}api/${this.api_path}/cart/${item.id}`, { data })
        .then(() => {
          this.getCarts()
        })
        .catch((err) => {
          this.pushMessage({
            style: 'error',
            content: err.response.data.message
          })
        })
    },
    // 刪除單筆購物車資訊
    deleteCartData(id) {
      axios
        .delete(`${this.url}api/${this.api_path}/cart/${id}`)
        .then(() => {
          this.getCarts()
          this.pushMessage({
            style: 'success',
            content: '已刪除此品項'
          })
        })
        .catch((err) => {
          this.pushMessage({
            style: 'error',
            content: err.response.data.message
          })
        })
    },
    //刪除全部購物車
    deleteAllCart() {
      axios
        .delete(`${this.url}api/${this.api_path}/carts`)
        .then(() => {
          this.getCarts()
          this.pushMessage({
            style: 'success',
            content: '已刪除全部購物車囉～'
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
  created() {
    this.cart.carts = [];
    this.getCarts()
  }
}
</script>
