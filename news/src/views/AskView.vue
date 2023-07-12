<template>
  <div id="ask">
      <p v-for="item in fetchedAsk" :key="item">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <!-- <a :href="item.url"> {{ item.title }} </a> -->
      <small>
        {{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'fetchedAsk' ])
  },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
};
</script>

<style>
</style>