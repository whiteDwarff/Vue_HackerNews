<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <span class="user-info">{{ userInfo.id }}</span>
      <div class="time-ago">{{ userInfo.created }}</div>
    </div>
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

}
</script>

<style>

</style>