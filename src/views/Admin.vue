<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header-admin">
    <div class="header-admin-box">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo-white.svg" />
      <nav class="nav">
        <RouterLink to="/" class="test" v-show="this.checkLogin === true">前台首頁</RouterLink>
        <RouterLink
          :to="{
            name: 'login'
          }"
          v-if="checkLogin === false"
        >
          登入
        </RouterLink>
        <a href="#" @click="signOut" v-if="checkLogin === true"> 登出 </a>
      </nav>
    </div>
  </header>
  <toast></toast>
  <RouterView class="admin" />
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
      checkLogin: false
    }
  },
  components: {
    Toast
  },
  methods: {
    // 使用 mapAction 取得 Pinia 的方法
    ...mapActions(useToastMessageStore, ['pushMessage']),
    checkAdmin() {
      axios
        .post(`${this.url}api/user/check`)
        .then(() => {
          this.checkLogin = true
          this.$router.push({
            name: 'dashboard'
          })
        })
        .catch(() => {
          this.checkLogin = false
          this.$router.push({
            name: 'login'
          })
        })
    },
    signOut() {
      axios
        .post(`${this.url}logout`)
        .then(() => {
          this.pushMessage({
            style: 'success',
            content: '已經登出囉！'
          })
          this.$router.push({
            name: 'login'
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
    // eslint-disable-next-line no-useless-escape
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)rita009\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    // https://github.com/axios/axios#global-axios-defaults
    axios.defaults.headers.common['Authorization'] = token
    this.checkAdmin()
  }
}
</script>
