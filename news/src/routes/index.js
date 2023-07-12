import { createWebHistory, createRouter } from "vue-router";
import AskView from "@/views/AskView.vue"
import JobsView from "@/views/JobsView.vue"
import NewView from "@/views/NewsView.vue"
import ItemView from "@/views/ItemView.vue"
import UserView from "@/views/UserView.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // 기본 페이지를 news로 정의
      path: '/',
      redirect: 'news'
    },
    {
      // path : url 주소
      path: '/news',
      // component : url 주소로 갔을 때 표시될 컴포넌트(페이지)
      component: NewView,
  
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/item',
      component: ItemView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
})