<template>
  <div id="news">
    <p v-for="item in fetchedNews" :key="item">
      <a :href="item.url"> {{ item.title }} </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'fetchedNews' ])
  },
  // 컴포넌트가 생성되자마자 실행되는 로직, 데이터를 요청할 때 사용
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>
</style>