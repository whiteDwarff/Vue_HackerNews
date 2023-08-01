![header](https://capsule-render.vercel.app/api?type=waving&color=timeGradient&text=API를%20사용하여%Vue-Hacker-News%20구현📰&animation=twinkling&fontSize=23&fontAlignY=40&fontAlign=70&height=250&width=1325&align=center)
<br>
<br>
 <div align="center">
  <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo= vuedotjs&logoColor=#fff"/>
  <img src="https://img.shields.io/badge/axios-412991?style=flat&logo=axios&logoColor=#5A29E4"/>
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/>
   <img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logoColor=#fff"/>
     <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
</div>
<br>
<br>
<br>

<div align="center"">
🔗 [VueHackerNews-URL 바로가기]  (https://velvety-duckanoo-58de5e.netlify.app/news)
</div>
<br>
<br>
<br>

## 기술스택
**1. vue3.0**<br>
>*vue create hacker-news*<br>

**2. vuex**<br>
>*npm install vuex@next*
>*npm install vue-router@4*
**3. router**<br>
>

**4. axios npm i axios**<br>
>*npm i axios*
<br>
<br>
<br>

# Vue_HackerNews

views 폴더의 구성엔 routing 정보가 담겨있는 컴포넌트만 들어가는게 좋다.
(데이터를 불러오는 로직은 사용되지 않음, 사용자에게 직접 노출되는 화면)

export
```ruby
# axios를 통해 데이터를 불러오는 로직
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
          # mutations의 SET_NEWS에 데이터(res.data)를 넘김
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




 
