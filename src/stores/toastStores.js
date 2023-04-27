import { defineStore } from 'pinia';

export const useToastMessageStore = defineStore('toastStore', {
    state: () => ({
        messages: [],
    }),
    actions: {
        // 關閉toast:方法一
        // toastClose(event) {
        //     const toast = event.target.closest('.toast');
        //     if (toast) {
        //         toast.remove();
        //     }
        // },
        // 關閉toast:方法二
        clearToast(index) {
            this.messages.splice(index, 1);
        },
        toastShow() {
            setTimeout(() => {
                this.messages.shift();
            }, 6000);
        },
        pushMessage(message) {
            const { style = 'success', content } = message;
            this.messages.push({ style, content });
            this.toastShow();
        }
    }
})