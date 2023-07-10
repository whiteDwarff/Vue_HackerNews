# Vue_HackerNews

views 폴더의 구성엔 routing 정보가 담겨있는 컴포넌트만 들어가는게 좋다.
(데이터를 불러오는 로직은 사용되지 않음)

export
```ruby
# src > api > index.js

import axios from "axios";

# 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};
# 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`)
}

export {
  fetchNewsList
}
```
import
```ruby
# src > views > NewsView.vue

import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
     fetchNewsList()
      .then(res => this.users = res.data)
      .catch(err => console.log(err));
  },
};
```




# lifeCycle

## created
  1. 컴포넌트가 생성되자마자 실행되는 로직으로 데이터를 요청할 때 사용 **
  2. 부모, 자식 관계의 컴포넌트가 렌더링 될 때 mounted보다 먼저 호출되며 부모, 자식 순으로 실행.
  3. 가상돔을 건드릴 수 없음 ($el 속성 사용 불가)




# VueX import 
  1. 실행중인 서버 종료 (ctrl + c)
  2. terminal에 npm install vuex@next
  3. src/store/index.js 생성
  4. 하단 코드 작성


  ```ruby
    # 1. src/store/index.js
    
    # vue3 부터는 createStore 사용
    import { createStore } from 'vuex'

    export const store =  createStore({
      state: {
        news: [],
        ask: [],
        jobs: [],
      },
      # backend api를 가져와서 mutations에 넘겨주는 속성 (api를 호출) **
      actions: {
        FETCH_NEWS(context) {
          fetchNewsList()
          // mutations의 SET_NEWS에 데이터(res.data)를 넘김
          .then(res => context.commit('SET_NEWS', res.data))
          .catch(err => console.log(err))
        }
      },
      # actions에서 받은 데이터를 state에 넘겨줌
      # mutations는 state의 상태를 관리하는 속성이다. ***
      mutations: {
        SET_NEWS(state, news) {
          state.news = news;
      }
    }
    ## api 호출순서
    ### actions로 호출
    ### mustations로 state의 속성에 값저장
    ### components에서 this.$store.dispatch()속성으로 state의 값 받아오기



    # 2. src/main.js
    import { store } from '@/store/index.js'
    app.use(store)
    
   ```




 
