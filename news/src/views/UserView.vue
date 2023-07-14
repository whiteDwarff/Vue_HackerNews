<template>
  <div>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from "./UserProtile.vue"

export default {

  created() {
    const userName = this.$route.params.id
    // store의 dispatch 속성을 통해 'FETCH_USER'을 호출해 userName을 넘겨줌
    this.$store.dispatch('FETCH_USER', userName);
  },
  components: {
    UserProfile
  }

};
</script>

<style>
</style>