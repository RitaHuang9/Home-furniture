<template>
  <div class="container">
    <h2 class="page-title-center">完成訂單</h2>
    <h3 class="page-subtitle-center">感謝您的信任與購買，以下為您的購買資訊</h3>
    <div class="finishOrder">
      <ul>
        <li class="finishOrder-list">
          <div class="finishOrder-list-title">訂單編號</div>
          <div class="finishOrder-list-txt">{{ order.id }}</div>
        </li>
        <li class="finishOrder-list">
          <div class="finishOrder-list-title">訂單金額</div>
          <div class="finishOrder-list-txt">$ {{ order.total }}</div>
        </li>
        <li class="finishOrder-list">
          <div class="finishOrder-list-title">成立日期</div>
          <div class="finishOrder-list-txt"> {{ timesTamp(order.create_at) }}</div>
        </li>
      </ul>
      <ul class="line-top">
        <li class="finishOrder-list">
          <div class="finishOrder-list-title">Email</div>
          <div class="finishOrder-list-txt">{{ order.user.email }}</div>
        </li>
        <li class="finishOrder-list">
          <div class="finishOrder-list-title">收寄人姓名</div>
          <div class="finishOrder-list-txt">{{ order.user.name }}</div>
        </li>
        <li class="finishOrder-list">
          <div class="finishOrder-list-title">收件人電話</div>
          <div class="finishOrder-list-txt">{{ order.user.tel }}</div>
        </li>
      </ul>
    </div>
    <RouterLink
          :to="{
            name: 'product-list'
          }"
          class="btn btn-lg btn-secondary mt-5"
          >繼續選購家具</RouterLink
        >
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:['orderId'],
  data() {
    return {
      id: this.$route.params.orderId,
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      order: {},
    }
  },
  methods: {
    // 取得購物車
    getOrder() {
      axios
        .get(`${this.url}api/${this.api_path}/order/${this.id}`)
        .then((res) => {
          this.order = res.data.order
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // 轉換時間戳
    timesTamp(time){
      let newTime = new Date(time * 1000) ;
      return newTime.getFullYear() + '/' + (newTime.getMonth()+1) + '/' + newTime.getDate()
    }
  },
  mounted() {
    this.getOrder();
  }
}
</script>
