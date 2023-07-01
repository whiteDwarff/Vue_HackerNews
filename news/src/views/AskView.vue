<template>
  <div id="ask">
    <div v-for="ask in asks" :key="ask">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      asks: [],
    };
  },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created() {
    fetchAskList()
      .then(res => this.asks = res.data)
      .catch(err => console.log(err));
  },
};
</script>

<style>
</style>