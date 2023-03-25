/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
//匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure} from "vee-validate";
//匯入全部規則：
import AllRules from '@vee-validate/rules'
//匯入多國語系的功能
import { localize, setLocale } from "@vee-validate/i18n";
//匯入繁體中文語系檔案
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

import InfiniteScroll from 'vue-infinite-scroll';

//匯入全部規則
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
});
//設定 vee-validate 全域規則
configure({
    generateMessage: localize({ zh_TW: zhTW }), //載入繁體中文語系
    validateOnInput: true //當輸入任何內容直接進行驗證
});
//設定預設語系
setLocale("zh_TW");

// import './assets/main.scss'


const app = createApp(App)
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(createPinia())
app.use(router)
app.use(InfiniteScroll);
app.use(VueAxios, axios)
app.mount('#app')
