<template>
  <header>
    <nav class="nav-home">
        <RouterLink :to="{
          name: 'index'
        }" class="nav-home-link">前台畫面</RouterLink>

        <RouterLink :to="{
          name: 'admin'
        }" class="nav-home-link">後台管理</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

