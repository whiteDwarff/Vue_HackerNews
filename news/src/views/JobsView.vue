<template>
  <div id="jobs">
    <div v-for="job in jobs" :key="job">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index.js";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created() {
    fetchJobsList()
      .then(res => this.jobs = res.data)
      .catch(err => console.log(err));
  },
};
</script>

<style>
</style>