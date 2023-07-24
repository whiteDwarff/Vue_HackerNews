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
  // 공통된 기능들을 하나의 함수로 정의
  // pageName에는 route의 name 속성으로 다른 axios 요청을 담당
  async FETCH_LIST({ commit }, pageName) {
    let response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  },
  
  // store의 method는 대문자로!!
  // commit는 state의 속성에 접근하기 위해 mutations로 보내는 함수
  async FETCH_NEWS(context) {
    // /src/api/index.js에 정의된 함수를 import하여 사용
    let response = await fetchNewsList()
    // mutations의 SET_NEWS에 데이터(res.data)를 넘김
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK({ commit }) {
    let response = await fetchAskList();
    commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    let response = await fetchJobsList() 
    commit('SET_JOBS', response.data)
    return response;
  },
  // name은 UserView에서 함수 호출 시 넘겨받은 유저의 정보
  async FETCH_USER({ commit }, name) {
    let response =  fetchUserInfo(name)
    commit('SET_USER', response.data);
    return response;
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

}