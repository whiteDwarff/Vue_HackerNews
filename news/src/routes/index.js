import { createWebHistory, createRouter } from "vue-router";
import ItemView from "@/views/ItemView.vue"
import UserView from "@/views/UserView.vue"
// import createListView from "@/views/CreateListView.js"
import NewsView from "@/views/NewsView.vue"
import AskView from "@/views/AskView.vue"
import JobsView from "@/views/JobsView.vue"
import { store } from '@/store/index'
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
      name: 'news',
      // component : url 주소로 갔을 때 표시될 컴포넌트(페이지)
      component: NewsView,
      // HighOrderComponent
      // component의 이름은 'NewsView'가 된다.
      // component: createListView('NewsView'),

      // to : 이동할 위치
      // from : 현재위치, next: function
      beforeEnter: (to, from, next) => {
        store.dispatch('FETCH_LIST', to.name)
        // 데이터를 가져온 후 페이지 이동
        .then( () => next())
        .catch(err => console.log(err));
        store.dispatch('START_SPINNER'); // 스피너 시작
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        store.dispatch('FETCH_LIST', to.name)
          .then( () => next())
          .catch( err => console.log(err))
        store.dispatch('START_SPINNER')
      }
      //component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        store.dispatch('FETCH_LIST', to.name)
          .then( () => next())
          .catch( err => console.log(err))
        store.dispatch('START_SPINNER')
      }
      //component: createListView('JobsView'),
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