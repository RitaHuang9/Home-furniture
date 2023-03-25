<template>
  <div>
    <ul class="product-card">
      <li class="product-card-item" v-for="item in newProducts" :key="item.id">
        <div class="product-card-img">
          <img :src="item.imageUrl" alt="" />
        </div>
        <div class="product-card-title">{{ item.title }}</div>
        <div class="product-card-price">$ {{ item.price }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['categoryId'],
  data() {
    return {
      id: this.$route.params.categoryId,
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      products: {},
      newProducts: {
        name: ''
      }
    }
  },
  methods: {
    // 取得產品列表
    getData() {
      axios
        .get(`${this.url}api/${this.api_path}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.newProducts = this.products
          console.log('產品列表', this.products)
        })
        .catch((err) => {
          alert(err)
        })
    },
    // 產品頁分類
    renderProduct() {
      if (this.id === '全部') {
        this.newProducts = this.products
        this.newProducts.name = '全部'
        return
      } else {
        const newCategory = Object.values(this.products).filter(
          (product) => product.category === this.id
        )
        this.newProducts = newCategory
      }
    }
  }
}
</script>
