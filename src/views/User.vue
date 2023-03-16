<template>
  <header class="header-user">
    <div class="header-user-box">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo-white.svg" />
      <nav class="nav">
        <RouterLink to="/">最新消息</RouterLink>
        <RouterLink
          :to="{
            name: 'login'
          }"
          >了解我們</RouterLink
        >
        <RouterLink
          :to="{
            name: 'login'
          }"
          >傢俱選購</RouterLink
        >
        <RouterLink
          :to="{
            name: 'login'
          }"
          class="nav-icon-shopping"
          ><img src="@/assets/images/shopping-car.svg" alt=""></RouterLink
        >
        <RouterLink
          :to="{
            name: 'login'
          }"
          class="nav-icon-member"
          ><img src="@/assets/images/member.svg" alt=""></RouterLink
        >
      </nav>
      <div class="burger">
        <div class="burger-item"></div>
        <div class="burger-item"></div>
        <div class="burger-item"></div>
      </div>
    </div>
    <user-sub-menu></user-sub-menu>
  </header>
  <RouterView/>
</template>

<script>
import UserSubMenu from '@/components/UserSubMenu.vue';

export default {
  data(){
    return{

    }
  },
  components:{
    UserSubMenu
  },
}
</script>
