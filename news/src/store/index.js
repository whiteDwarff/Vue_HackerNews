import { createStore } from 'vuex'

// mutations 
import mutations from "./mutations.js"
import actions from "./actions.js"

// vue3에선 createStroe로 vuex를 불러와야함
export const store = createStore({
  state: {
    user: {},
    item: {},
    loadingStatus: false,
    list: []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  // backend api를 가져와서 mutations에 넘겨주는 속성 (api를 호출) **
  actions,
  // actions에서 받은 데이터를 state에 넘겨줌
  // mutations는 state의 상태를 관리하는 속성이다. ***
  mutations,
})
