<template>
  <div>
    <UserProfile>
      <template #username>
        <span class="user-info">{{ userInfo.id }}</span>
      </template>
      <template #time>
        <small class="time">{{ 'joined : '+ userInfo.created }}, {{ userInfo.karma }}</small>
      </template>
    </UserProfile>
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
  computed: {
    userInfo() {
      return this.$store.state.user;
    }  
  },
  components: {
    UserProfile
  }

};
</script>

<style>
</style>