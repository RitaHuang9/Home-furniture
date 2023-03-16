<template>
  <header class="header-admin">
    <div class="header-admin-box">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo-white.svg" />
      <nav class="nav">
        <RouterLink to="/" class="test" v-show="this.checkLogin === true">前台首頁</RouterLink>
        <RouterLink :to="{
          name: 'login'
        }">登入</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView  class="admin"/>
</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      url: import.meta.env.VITE_PATH,
      checkLogin: false,
    }
  },
  methods:{
    checkAdmin() {
      axios
        .post(`${this.url}api/user/check`)
        .then(() => {  
          this.checkLogin = true;        
          this.$router.push({
            name: 'dashboard'
          })
        })
        .catch(() => {
          this.$router.push({
            name: 'login'
          })
        })
    },
  },
  mounted(){
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)rita009\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    // https://github.com/axios/axios#global-axios-defaults
    axios.defaults.headers.common['Authorization'] = token
    
    this.checkAdmin()
  }
}
</script>
