<template>
  <div class="subMenu">
    <div class="subMenu-box">
      <div class="subMenu-icon">
        <RouterLink
          :to="{
            name: 'login'
          }"
          class="subMenu-icon-link subMenu-icon-shopping"
          ><img src="@/assets/images/shopping-car.svg" alt="" />
          購物車
        </RouterLink>
        <RouterLink
          :to="{
            name: 'login'
          }"
          class="subMenu-icon-link subMenu-icon-member"
          ><img src="@/assets/images/member.svg" alt="" /> 登入</RouterLink
        >
      </div>
      <RouterLink class="subMenu-box-link" to="/">最新消息</RouterLink>
      <RouterLink class="subMenu-box-link"
        :to="{
          name: 'login'
        }"
        >了解我們</RouterLink
      >
      <RouterLink class="subMenu-box-link"
        :to="{
          name: 'login'
        }"
        >傢俱選購</RouterLink
      >
      
    </div>
  </div>
</template>
