<template>
  <div id="news">
    <div v-for="user in users" :key="user">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      users: [],
    };
  },
  // 컴포넌트가 생성되자마자 실행되는 로직, 데이터를 요청할 때 사용
  created() {
    fetchNewsList()
      .then(res => this.users = res.data)
      .catch(err => console.log(err));
  },
};
</script>

<style>
</style>