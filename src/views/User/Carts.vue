<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="goBack">
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
    <div class="flexBlock">
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
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      cart: {}
    }
  },
  methods: {
    // 取得購物車
    getCarts() {
      axios
        .get(`${this.url}api/${this.api_path}/cart`)
        .then((res) => {
          this.cart = res.data.data
          console.log('購物車清單', this.cart)
        })
        .catch((err) => {
          alert(err.response.data.message)
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
        .then((res) => {
          this.getCarts()
          console.log('更新購物車', res)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // 刪除單筆購物車資訊
    deleteCartData(id) {
      axios
        .delete(`${this.url}api/${this.api_path}/cart/${id}`)
        .then((res) => {
          this.getCarts()
          alert(`已刪除此品項`)
          console.log('刪除單一購物車', res.data)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    //刪除全部購物車
    deleteAllCart() {
      axios
        .delete(`${this.url}api/${this.api_path}/carts`)
        .then((res) => {
          this.getCarts();
          alert(`已刪除全部購物車囉～`)
          console.log('刪除全部購物車', res.data)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted() {
    this.getCarts()
  }
}
</script>
