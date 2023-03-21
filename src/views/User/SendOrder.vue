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
    <div class="page-title">payment</div>
    <div class="flexBlock">
      <div class="flexBlock-left w-3">
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
      </div>
      <div class="flexBlock-right w-7">
        <Form ref="form" class="table-full w-10" v-slot="{ errors }" @submit="createOrder">
          <div class="feild">
            <div class="feild-body">
              <label for="title" class="form-label">Email</label>
              <div class="feild-input">
                <Field
                  id="Email"
                  name="Email"
                  type="Email"
                  class="form-control"
                  placeholder="請輸入Email"
                  :class="{ 'is-invalid': errors['Email'] }"
                  rules="email|required"
                  v-model="form.user.email"
                ></Field>
              </div>
              <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="feild">
            <div class="feild-body">
              <label for="title" class="form-label">收件人姓名</label>
              <div class="feild-input">
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  placeholder="請輸入收件人姓名"
                  :class="{ 'is-invalid': errors['收件人姓名'] }"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
              </div>
              <ErrorMessage name="收件人姓名" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="feild">
            <div class="feild-body">
              <label for="title" class="form-label">收件人電話</label>
              <div class="feild-input">
                <Field
                  id="tel"
                  name="電話"
                  type="text"
                  class="form-control"
                  placeholder="請輸入電話"
                  :class="{ 'is-invalid': errors['電話'] }"
                  v-model="form.user.tel"
                  rules="required|min:8|max:10"
                ></Field>
              </div>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="feild">
            <div class="feild-body">
              <label for="title" class="form-label">收件人地址</label>
              <div class="feild-input">
                <Field
                  id="address"
                  name="收件人地址"
                  type="text"
                  class="form-control"
                  placeholder="請輸入收件人地址"
                  :class="{ 'is-invalid': errors['收件人地址'] }"
                  v-model="form.user.address"
                  rules="required"
                ></Field>
              </div>
              <ErrorMessage name="收件人地址" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>

          <div class="feild">
            <div class="feild-body">
              <label for="content" class="form-label">留言</label>
              <div class="feild-input">
                <Field
                  id="content"
                  name="留言"
                  type="textarea"
                  class="form-control"
                  as="textarea"
                  :class="{ 'is-invalid': errors['留言'] }"
                  placeholder="請輸入留言"
                  rules="max:200"
                  v-model="form.message"
                ></Field>
              </div>
              <ErrorMessage name="留言" class="invalid-feedback"></ErrorMessage>
            </div>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-lg btn-secondary mt-5">送出訂單</button>
          </div>
        </Form>
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
      cart: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId:''
    }
  },
  methods: {
    // 取得購物車
    getCarts() {
      axios
        .get(`${this.url}api/${this.api_path}/cart`)
        .then((res) => {
          this.cart = res.data.data
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    createOrder() {
      const order = this.form
      axios
        .post(`${this.url}api/${this.api_path}/order`, { data: order })
        .then((res) => {
          this.getCarts();

          this.$refs.form.resetForm() //清空表單
          this.orderId = res.data.orderId
          this.$router.push(`finish-order/${this.orderId}`)

          alert(`訂單已送出～～`)
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
