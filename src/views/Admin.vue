<template>
  <header class="header-admin">
    <div class="header-admin-box">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo-white.svg" />
      <nav class="nav">
        <RouterLink to="/" class="test" v-show="this.checkLogin === true">前台首頁</RouterLink>
        <RouterLink :to="{
          name: 'login'
        }" v-if="checkLogin === false"> 登入 </RouterLink>
        <a href="#"  @click="signOut" v-if="checkLogin === true"> 登出 </a>
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
          this.checkLogin = false;  
          this.$router.push({
            name: 'login'
          })
        })
    },
   signOut(){
      axios
        .post(`${this.url}logout`)
        .then((res) => {  
          alert(`已經登出囉！`)    
          console.log('是否登出', res);
             
          this.$router.push({
            name: 'login'
          })
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
   }

  },
  mounted(){
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)rita009\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    // https://github.com/axios/axios#global-axios-defaults
    axios.defaults.headers.common['Authorization'] = token
    
    this.checkAdmin()
  }
}
</script>
