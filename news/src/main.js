import { createApp } from 'vue'
import App from './App.vue'
// 객체를 import 할 경우 {}를 사용
// 변수 및 함수등을 import 할 경우 {} 사용x
import { router } from "@/routes/index.js"
import { store } from '@/store/index.js'



const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')