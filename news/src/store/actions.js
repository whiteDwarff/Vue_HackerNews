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
    return fetchNewsList()
    // mutations의 SET_NEWS에 데이터(res.data)를 넘김
    .then(res => {
      context.commit('SET_NEWS', res.data)
      return res
    })
    .catch(err => console.log(err))
  },
  FETCH_ASK({ commit }) {
    return fetchAskList()
    .then(({ data }) => {
      commit('SET_ASK', data)
      return data
    })
    .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList() 
    .then(({ data }) => {
      commit('SET_JOBS', data)
      return data
    })
    .catch(err => console.log(err))
  },
  // name은 UserView에서 함수 호출 시 넘겨받은 유저의 정보
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
    .then(({ data }) => commit('SET_USER', data))
    .catch(err => console.log(err));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
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
  // pageName에는 route의 name 속성으로 다른 axios 요청을 담당
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName) 
      .then( res => {
        commit('SET_LIST', res.data)
        return res
      })
      .catch(err => console.log(err)) 
  }
}