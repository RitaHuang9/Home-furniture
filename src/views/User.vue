<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div @scroll="onScroll">
    <header class="header-user" ref="indexBanner">
      <div class="header-user-top">
        <div class="header-user-box" :class="{ 'black': currPath !== '/user/index'}">
          <RouterLink
            :to="{
              name: 'index'
            }"
          >
            <img alt="Vue logo" class="logo" src="@/assets/images/logo-white.svg" />
          </RouterLink>

          <nav class="nav">
            <RouterLink
              :to="{
                name: 'index'
              }"
              >最新消息</RouterLink
            >
            <RouterLink
              :to="{
                name: 'about'
              }"
              >了解我們</RouterLink
            >
            <RouterLink
              :to="{
                name: 'product-list'
              }"
              >傢俱選購</RouterLink
            >
            <RouterLink
              :to="{
                name: 'carts'
              }"
              class="nav-icon-shopping"
              ><img src="@/assets/images/shopping-car.svg" alt=""
            /></RouterLink>
            <RouterLink
              :to="{
                name: 'login'
              }"
              class="nav-icon-member"
              ><img src="@/assets/images/member.svg" alt=""
            /></RouterLink>
          </nav>
          <div
            class="burger"
            :class="{ active: showSubMenu === true }"
            @click="showSubMenu = !showSubMenu"
          >
            <div class="burger-item"></div>
          </div>
        </div>
      </div>
      <user-sub-menu v-show="showSubMenu" @click="showSubMenu === true"></user-sub-menu>
    </header>

    <RouterView />
    <!-- v-show="currPath !== '/user/index'" -->
    <footer class="footer-main">
      <div class="footer-right">
        <div class="footer-right-content">
          <img class="footer-logo" src="@/assets/images/logo-black.svg" alt="" />
          <p class="footer-right-slogan">讓你在家的每時每刻都是享受</p>
        </div>
      </div>
      <div class="footer-left">
        <nav class="footer-nav">
          <RouterLink
            class="footer-link"
            :to="{
              name: 'index'
            }"
            >聯絡我們</RouterLink
          >
          <div class="footer-link-circle"></div>
          <RouterLink
            class="footer-link"
            :to="{
              name: 'index'
            }"
            >最新消息</RouterLink
          >
          <div class="footer-link-circle"></div>
          <RouterLink
            class="footer-link"
            :to="{
              name: 'about'
            }"
            >了解我們</RouterLink
          >
          <div class="footer-link-circle"></div>
          <RouterLink
            class="footer-link"
            :to="{
              name: 'product-list'
            }"
            >家具選購</RouterLink
          >
        </nav>
        <div class="footer-info">
          <div class="footer-info-title">聯絡地址</div>
          <div class="footer-info-content">新北市板橋區文化路三段33號1樓</div>
        </div>
        <div class="footer-info">
          <div class="footer-info-title">LINE 客服時間</div>
          <div class="footer-info-content">每週一到五 09:00 - 18:00</div>
        </div>
        <div class="footer-bottom">
          <p>此為作品集使用，不做商業用途</p>
          <ul class="footer-social">
            <li>FOLLOW US</li>
            <li class="footer-social-yt"></li>
            <li class="footer-social-fb"></li>
            <li class="footer-social-line"></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import UserSubMenu from '@/components/UserSubMenu.vue'

export default {
  data() {
    return {
      showSubMenu: false,
      currPath: '/',
      // bannerPosition:false,
      // isSticky: false,
      // targetPosition: 650 // 滾動到這個位置時 header 變成 sticky
    }
  },
  components: {
    UserSubMenu
  },
  methods: {
    // 關閉測選單
    closeSubMenu() {
      this.showSubMenu = false
    },
    // FIX:監測滾動 「滾動超過banner時，新增class」
    // handleScroll() {
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    //   this.isSticky = scrollTop > this.targetPosition
    // }
  },
  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  mounted() {
    this.currPath = this.$route.path
    console.log('submenu',this.showSubMenu);
    
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
