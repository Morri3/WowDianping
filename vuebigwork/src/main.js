import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 导入vant
import 'vant/lib/index.css' // 导入vant
import 'amfe-flexible' // 导入rem适配所需要的

createApp(App).use(store).use(router).use(Vant).mount('#app')
