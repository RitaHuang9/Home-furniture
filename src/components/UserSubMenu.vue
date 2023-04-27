<template>
  <div class="subMenu">
    <ul class="subMenu-box" >
      <li class="subMenu-box-link">
        <a @click="goToPage('product-list')">最新消息</a>
      </li>
      <li class="subMenu-box-link">
        <a @click="goToPage('about')">了解我們</a>
      </li>
      <li class="subMenu-box-link">
        <a @click="goToPage('product-list')">傢俱選購</a>
      </li>
      <li class="subMenu-icon">
        <a class="subMenu-icon-link subMenu-icon-shopping" @click="goToPage('carts')">
          <img src="@/assets/images/shopping-car.svg" alt="" />
          購物車</a>
        <!-- <a class="subMenu-icon-link subMenu-icon-member" @click="goToPage('login')">
          <img src="@/assets/images/member.svg" alt="" />
          管理員登入</a> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['goToPage']
}
</script>
