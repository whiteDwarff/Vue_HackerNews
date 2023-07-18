import { createWebHistory, createRouter } from "vue-router";
import ItemView from "@/views/ItemView.vue"
import UserView from "@/views/UserView.vue"
// import createListView from "@/views/CreateListView.js"
import NewsView from "@/views/NewsView.vue"
import AskView from "@/views/AskView.vue"
import JobsView from "@/views/JobsView.vue"


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
      component: NewsView,
      // component : url 주소로 갔을 때 표시될 컴포넌트(페이지)
      // HighOrderComponent
      // component의 이름은 'NewsView'가 된다.
      //component: createListView('NewsView'),
      name: 'news'
  
    },
    {
      path: '/ask',
      component: AskView,
      //component: createListView('AskView'),
      name: 'ask'
    },
    {
      path: '/jobs',
      component: JobsView,
      //component: createListView('JobsView'),
      name: 'jobs'
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