<template>
  <div>
    <p>name : {{ userInfo.id }} </p>
    <p>karma : {{ userInfo.karma }} </p>
    <p>created : {{ userInfo.created }} </p>
  </div>
</template>

<script>

export default {
  // 데이터에 기반한 동적인 계산을 수행하는데 사용
  // VueX stroe의 user의 상태에 의존함 -> user의 상태가 변경될 떄마다 갱신
  // 데이터가 변하지 않는다면 이전에 계산된 값을 반환한다.
  computed: {
    userInfo() {
      return this.$store.state.user;
    }  
  },
  created() {
    const userName = this.$route.params.id
    // store의 dispatch 속성을 통해 'FETCH_USER'을 호출해 userName을 넘겨줌
    this.$store.dispatch('FETCH_USER', userName);
  },

};
</script>

<style>
</style>