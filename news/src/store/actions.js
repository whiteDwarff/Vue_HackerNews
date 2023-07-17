// api 
import { 
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";


export default {
  // store의 method는 대문자로!!
  // commit는 state의 속성에 접근하기 위해 mutations로 보내는 함수
  FETCH_NEWS(context) {
    // /src/api/index.js에 정의된 함수를 import하여 사용
    fetchNewsList()
    // mutations의 SET_NEWS에 데이터(res.data)를 넘김
    .then(res => {
      context.commit('SET_NEWS', res.data)
      return res
    })
    .catch(err => console.log(err))
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
    .then(({ data }) => {
      commit('SET_ASK', data)
      return data
    })
    .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList() 
    .then(({ data }) => {
      commit('SET_JOBS', data)
      return data
    })
    .catch(err => console.log(err))
  },
  // name은 UserView에서 함수 호출 시 넘겨받은 유저의 정보
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
    .then(({ data }) => commit('SET_USER', data))
    .catch(err => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
    .then(({ data }) => commit('SET_ITEM', data))
    .catch(err => console.log(err))
  },
  // spinner 이벤트 제어
  START_SPINNER({ commit }) {
    commit('START_SPINNER')
  },
  END_SPINNER({ commit }) {
    commit('END_SPINNER')
  },
  // HighOrderComponent
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName) 
      .then(({data}) => {
        commit('SET_LIST', data)
      })
      .catch(err => console.log(err)) 
  }
}