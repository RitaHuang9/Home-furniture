<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="toast-container">
    <div class="toast show" v-for="(msg, key) in messages" :key="key">
      <div class="toast-message">
        <img class="toast-statu" :src="`src/assets/images/${msg.style}-white.svg`" alt="" />
        {{ msg.content}}
      </div>
      <img @click="clearToast" class="toast-close" src="@/assets/images/close-white.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useToastMessageStore } from '../stores/toastStores'

export default {
  computed: {
    ...mapState(useToastMessageStore, ['messages'])
  },
  methods: {
    ...mapActions(useToastMessageStore, ['clearToast'])
  }
}
</script>
