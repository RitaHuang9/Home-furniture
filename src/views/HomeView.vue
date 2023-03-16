<template>
  <header>
    <nav class="nav-home">
        <RouterLink :to="{
          name: 'user'
        }" class="nav-home-link">前台畫面</RouterLink>

        <RouterLink :to="{
          name: 'admin'
        }" class="nav-home-link">後台管理</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>
