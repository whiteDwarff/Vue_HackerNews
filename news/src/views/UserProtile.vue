<template>
  <div class="user-container">
    <i class="fas fa-user"></i>
    <div class="user-description">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
      <slot name="username" />
      <slot name="time" />
    </div>
  </div>
</template>

<script>
export default {
  // 데이터에 기반한 동적인 계산을 수행하는데 사용
  // VueX stroe의 user의 상태에 의존함 -> user의 상태가 변경될 떄마다 갱신
  // 데이터가 변하지 않는다면 이전에 계산된 값을 반환한다.
  // computed: {},
  // props: {
  //   userInfo: Object,
  // },
};
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 1rem;
}
.user-info {
  margin: 0 10px;
  font-weight: bold;
}
.user-info:hover {
  text-decoration: underline;
}
.time {
  font-size: 0.7rem;
  color: grey;
  font-style: italic;
}

</style>