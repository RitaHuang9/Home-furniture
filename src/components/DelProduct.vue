<template>
  <div class="modal modal-bg">
    <div class="modal-box modal-box-s">
      <h2 class="modal-title">刪除品項</h2>

      <div class="modal-body">
        <h3 class="content">您確定要刪除 <span>{{ tempProduct.title }}</span> 商品嗎？</h3>
        <h4 class="remark">（刪除後將無法恢復）</h4>
      </div>

      <div class="modal-btn modal-btn-double">
        <button type="button" class="btn btn-sub" @click="closeModal">取消</button>
        <button type="button" class="btn btn-main" @click="delProduct">確定</button>
      </div>
    </div>
    
    
  </div>
</template>

<script>

export default {
  props: ['tempProduct','closeModal','delProduct']
}
</script>
