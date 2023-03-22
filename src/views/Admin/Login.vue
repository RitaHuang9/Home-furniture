<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 class="title">立即登入</h2>
    <Form class="form-box" v-slot="{ errors }" @submit="login">
      <!-- {{ errors }}  -->
      <!-- {{ values }} -->
      <div class="feild">
        <div class="feild-body">
          <label for="email" class="form-label">Email</label>
          <div class="feild-input">
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="user.username"
            ></Field>
          </div>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <label for="password" class="form-label">密碼</label>
          <div class="feild-input">
            <Field
              id="password"
              name="密碼"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼"
              rules="required"
              v-model="user.password"
            ></Field>
          </div>
          <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <button class="btn btn-secondary btn-lg" type="submit">登入</button>
    </Form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.API_PATH,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const that = this
      axios
        .post(`${this.url}admin/signin`, this.user)
        .then(function (res) {
          const { token, expired } = res.data
          // 到ndm複製（https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie）
          document.cookie = `rita009=${token}; expires=${expired}`
          // 登入頁面不需要在讀取 Cookie 拿到 token 後賦予到 headers 上，因為登入頁面不需要做驗證行為，只需將登入成功時取得的 token 寫入 cookie 即可。
          that.$router.push({
            name: 'dashboard'
          })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
