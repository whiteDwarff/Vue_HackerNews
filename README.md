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
 
