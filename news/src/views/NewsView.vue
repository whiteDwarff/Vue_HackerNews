<template>
  <div id="news">
    <p v-for="(item, i) in fetchedNews" :key="i">
      <a :href="item.url"> {{ i+1 }}. {{ item.title }} </a>
      <small>{{ item.time_ago }} by 
        <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
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