<template>
  <div class="product-list">
    <div class="product-list-bg">
      <div class="page-title">
        design
        <span class="page-sub-title"
          >with heart,<br />
          only for yourlike
        </span>
      </div>
    </div>
    <div class="container">
      <div class="product-hot">
        <div class="product-title">
          熱門商品
          <span class="product-title-en">HOT</span>
        </div>
        <ul class="product-card hot">
          <li
            class="product-card-item"
            v-for="item in hotProducts"
            :key="item.id"
            @click="goProductDetail(item.id)"
          >
            <div class="product-card-img">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div class="product-card-title">{{ item.title }}</div>
            <div class="product-card-category">椅子</div>
          </li>
        </ul>
      </div>
     
      <div class="product-all">
        <ul class="product-menu">
          <li class="product-menu-link" 
          :class="{'active': name === '全部'}">
            <a href="#" @click.prevent="renderProduct('全部')">全部</a>
          </li>
          <li class="product-menu-link" 
          :class="{'active': name === '椅子'}"
          >
            <a href="#" @click.prevent="renderProduct('椅子')">椅子</a>
          </li>
          <li class="product-menu-link"
          :class="{'active': name === '櫃子'}"
          >
            <a href="#" @click.prevent="renderProduct('櫃子')">櫃子</a>
          </li>
          <li class="product-menu-link"
          :class="{'active': name === '沙發'}"
          >
            <a href="#" @click.prevent="renderProduct('沙發')">沙發</a>
          </li>
        </ul>
        <!-- <product-list-all class="mt-10" :new-products="newProducts"></product-list-all> -->
        <ul class="product-card mt-10">
          <li
            class="product-card-item"
            v-for="item in newProducts"
            :key="item.id"
            @click="goProductDetail(item.id)"
          >
            <div class="product-card-img">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div class="product-card-title">{{ item.title }}</div>
            <div class="product-card-price">$ {{ item.price }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      products: {},
      hotProducts: {},
      name:'全部',
      newProducts: {}
    }
  },
  methods: {
    // 取得產品列表
    getData() {
      axios
        .get(`${this.url}api/${this.api_path}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.hotProducts = this.products.slice(-3)
          this.newProducts = this.hotProducts
        })
        .catch((err) => {
          alert(err)
        })
    },
    // 開啟產品資訊
    goProductDetail(productId) {
      this.$router.push(`product-detail/${productId}`)
    },
    // 產品頁分類
    renderProduct(category) {
      if (category === '全部') {
        this.newProducts = this.products
        this.name = '全部'
        return
      } else {
        const newCategory = Object.values(this.products).filter(
          (product) => product.category === category
        )
        this.newProducts = newCategory
      }

      this.name = this.newProducts[0].category
      console.log('類別名稱', this.name);
      
    }
  },
  mounted() {
    this.getData()
    this.renderProduct('全部');
  }
}
</script>
