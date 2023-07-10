// api 
import { 
  fetchNewsList,
  fetchAskList,
  fetchJobsList
} from "../api/index.js";


export default {
  FETCH_NEWS(context) {
    // /src/api/index.js에 정의된 함수를 import하여 사용
    fetchNewsList()
    // mutations의 SET_NEWS에 데이터(res.data)를 넘김
    .then(res => context.commit('SET_NEWS', res.data))
    .catch(err => console.log(err))
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
    .then(({ data }) => commit('SET_ASK', data))
    .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList() 
    .then(({ data }) => commit('SET_JOBS', data))
    .catch(err => console.log(err))
  },
}