<template>
  <div>
    <ul class="product-card">
      <li class="product-card-item" v-for="item in products" :key="item.id">
        <div class="product-card-img">
          <img :src="item.imageUrl" alt="" />
        </div>
        <div class="product-card-title">{{ item.title }}</div>
        <div class="product-card-price">$ {{ item.price}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products']
}
</script>
