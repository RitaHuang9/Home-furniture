<template>
  <div>
    <h2 class="title">{{ Boolean("this.productStatus") * 1 ?'新增':'編輯' }}產品</h2>
    <Form class="table-full" v-slot="{ errors }">
      <div class="feild">
        <div class="feild-body">
          <label for="title" class="form-label">標題</label>
          <div class="feild-input">
            <Field
              id="title"
              name="標題"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['標題'] }"
              placeholder="請輸入標題"
              rules="required"
              v-model="tempProduct.title"
            ></Field>
          </div>
          <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <label for="category" class="form-label">分類</label>
          <div class="feild-input">
            <Field
              id="category"
              name="分類"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['分類'] }"
              placeholder="請輸入分類"
              rules="required"
              v-model="tempProduct.category"
            ></Field>
          </div>
          <ErrorMessage name="分類" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="feild-body">
          <label for="unit" class="form-label">單位</label>
          <div class="feild-input">
            <Field
              id="unit"
              name="單位"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['單位'] }"
              placeholder="請輸入單位"
              rules="required"
              v-model="tempProduct.unit"
            ></Field>
          </div>
          <ErrorMessage name="單位" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <label for="origin-price" class="form-label">原價</label>
          <div class="feild-input">
            <Field
              id="origin-price"
              name="原價"
              type="number"
              class="form-control"
              :class="{ 'is-invalid': errors['原價'] }"
              placeholder="請輸入原價"
              rules="required"
              v-model.number="tempProduct.origin_price"
            ></Field>
          </div>
          <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="feild-body">
          <label for="price" class="form-label">售價</label>
          <div class="feild-input">
            <Field
              id="price"
              name="售價"
              type="number"
              class="form-control"
              :class="{ 'is-invalid': errors['售價'] }"
              placeholder="請輸入售價"
              rules="required"
              v-model.number="tempProduct.price"
            ></Field>
          </div>
          <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <label for="description" class="form-label">產品描述</label>
          <div class="feild-input">
            <Field
              id="description"
              name="產品描述"
              type="text"
              as="textarea"
              class="form-control"
              :class="{ 'is-invalid': errors['產品描述'] }"
              placeholder="請輸入產品描述"
              rules="max:200"
              component="textarea"
              v-model="tempProduct.description"
            ></Field>
          </div>
          <ErrorMessage name="產品描述" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <label for="content" class="form-label">說明內容</label>
          <div class="feild-input">
            <Field
              id="content"
              name="說明內容"
              type="textarea"
              class="form-control"
              as="textarea"
              :class="{ 'is-invalid': errors['說明內容'] }"
              placeholder="請輸入說明內容"
              rules="max:200"
              v-model="tempProduct.content"
            ></Field>
          </div>
          <ErrorMessage name="說明內容" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <label for="upload-mainImg" class="form-label">主要圖片上傳</label>
          <div class="feild-input">
            <Field
              id="upload-mainImg"
              name="主要圖片"
              type="file"
              class="form-control"
              @change="uploadImg"
            >
            </Field>
          </div>
          <img class="upload-img" :src="tempProduct.imageUrl" alt="" />

          <ErrorMessage name="主要圖片" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="feild">
        <div class="feild-body">
          <div class="feild-input">
            <Field
              id="is_enabled"
              name="是否啟用"
              type="checkbox"
              class="form-control"
              value=true
              v-model="tempProduct.is_enabled"
            >
            </Field>

      
          <label for="is_enabled" class="form-label" style="">是否啟用{{tempProduct.is_enabled}}</label>
          </div>

          <ErrorMessage name="是否啟用" class="invalid-feedback"></ErrorMessage>
        </div>
          <!-- {{template.is_enabled}} -->
      </div>
      <!-- <div class="feild">
        <div class="feild-body">
          <label for="password" class="form-label">內頁圖片上傳</label>
          <div class="form-img-box">
            <div class="feild-input feild-column" v-for="(img, key) in tempProduct.imagesUrl" :key="key + '12334'">
              <Field 
              name="內頁圖片" 
              type="file" 
              ref="fileInput"
              class="form-control feild-column-item"
              v-model="tempProduct.imagesUrl[key]"
              @change="uploadImgItem($event,'sub')"
              > </Field>
              <img class="upload-img" :src="tempProduct.imagesUrl[key]" alt="" />
            </div>
          </div>
        </div>
      </div> -->

      <div class="btn-double">
        <button class="btn btn-secondary-outline btn-lg" type="submit" @click="goBack">取消</button>
        <button class="btn btn-secondary btn-lg" type="button" @click="updateProduct">確定</button>
      </div>
    </Form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['dashboardId', 'productStatus'],
  data() {
    return {
      id: this.$route.params.dashboardId,
      url: import.meta.env.VITE_PATH,
      api_path: import.meta.env.VITE_API,
      tempProduct: {
        // is_enabled: 0,
        imagesUrl: []
      },
      tempUploadImg: {} //上傳圖片檔案
    }
  },
  methods: {
    getData() {
      axios
        .get(`${this.url}api/${this.api_path}/product/${this.id}`)
        .then((res) => {
          this.tempProduct = res.data.product
          console.log('單一產品資訊：', this.tempProduct)
        })
        .catch((err) => {
          alert(err.reponse.data.message)
        })
    },
    updateProduct() {
      let urlNew = `${this.url}api/${this.api_path}/admin/product`
      let method = 'post'
      let isNew = this.productStatus

      // 預設為新增，若為編輯則更換
      if (isNew === 'false') {
        method = 'put'
        urlNew = `${this.url}api/${this.api_path}/admin/product/${this.tempProduct.id}`
      }

      console.log('現在api', urlNew,method,isNew);
      
      axios[method](urlNew, { data: this.tempProduct }) //api資料結構在data裡
        .then(() => {
          // 新增/更新產品後，需要再次取得產品，並將modal關閉
          console.log('更新資料', this.tempProduct)

          this.$router.push({
            name:'dashboard',
          })
        })
        .catch((err) => {
          // alert(err.reponse.data.message)
          console.log(err.response.data.message);
          
        })
    },
    // 圖片上傳
    uploadImg(e) {
      this.tempUploadImg = e.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', this.tempUploadImg)

      axios
        .post(`${this.url}api/${this.api_path}/admin/upload`, formData)
        .then((res) => {
          this.tempProduct.imageUrl = res.data.imageUrl
          e.target.value = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    if(this.productStatus === 'false'){

      this.getData();
    }
    console.log('動態參數資料', this.$route.params,'資料狀態',this.productStatus)
  }
}
</script>
