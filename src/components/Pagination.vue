<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pagination">
    <ul class="pagination-box">
      <li class="pagination-item">
        <a class="" href=""
        :class="{'disable':!pages.has_pre}"
        @click.prevent="getProduct(pages.current_page - 1)"
        >
          <img src="@/assets/images/pagination-arrow.svg" alt="" />
        </a>
      </li>


      <li class="pagination-item" v-for="page in pages.total_pages" :key="page + 'page'">
        <a class="pagination-link" 
        :class="{'active':page === pages.current_page}"
        href="#" 
        @click.prevent="getProduct(page)" >{{page}}</a>
      </li>

      <li class="pagination-item">
        <a class="pagination-next" href="#" 
        :class="{'disable':!pages.has_next}"
        @click.prevent="getProduct(pages.current_page + 1)"
        >
          <img src="@/assets/images/pagination-arrow.svg" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['getProduct','pages']
}
</script>
