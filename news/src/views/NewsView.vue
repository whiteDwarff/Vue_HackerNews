<template>
  <div id="news">
    <ListItem/>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"
import ListMixin from "../mixins/ListMixin.js"

export default {
  mixins: [ListMixin],
  components: {
    ListItem,
  }
};
</script>

<!-- 
1. 컴포넌트 라이프 사이클 훅
- created : 컴포넌트가 생성되자마자 실행되는 로직

2. 라우터 네비게이션 가드
- 특정 URL로 접근하기 전의 동작을 정의하는 함수
- 컴포넌트가 실행되기전에 데이터 호출 가능
-->