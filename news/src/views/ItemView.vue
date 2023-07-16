<template>
<div id="item-view">
  <section id="question">
    <!-- 사용자 정보 -->
      <UserProfile>
        <template #username>
          <router-link 
          :to="`/user/${fetchedItem.user }`" class="user-info">
          {{ fetchedItem.user }}
          </router-link>
        </template>
        <template #time>
          <small class="time">{{'posted : '+ fetchedItem.time_ago }}</small>
        </template>
      </UserProfile>
  </section>
  <!-- title & content -->
  <section>
      <h2 id="title">{{ fetchedItem.title }}</h2>
      <!-- v-html=""은 text내에 있는 tag들을 html요소로 바꿔준다. -->
      <div v-html="fetchedItem.content"></div>
  </section>

  <!-- 질문 댓글 -->
  <section id="content"></section>
</div>
</template>

<script>
import UserProfile from "./UserProtile.vue"
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    // params의 값을 받아옴
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
  components : {
    UserProfile,
  }
};
</script>

<style scoped>
#item-view {
  padding: 0 20px;
}
#question {
  padding-top: 30px;
}
#title { margin: 50px 0;}
.user-info {
  color: #000;
}
</style>