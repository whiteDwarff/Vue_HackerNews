<template>
<div>
  <section id="question">
    <!-- 질문 상세 정보 -->
    <div>
      <div class="user-container">
        <i class="fa-solid fa-user"></i>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`" class="user-info">
            {{ fetchedItem.user }}
          </router-link>
          <small class="time-ago">{{ fetchedItem.time_ago }}</small>
        </div>
      </div>
      <h2 id="title">{{ fetchedItem.title }}</h2>
      <!-- v-html=""은 text내에 있는 tag들을 html요소로 바꿔준다. -->
      <div v-html="fetchedItem.content"></div>
    </div>
  </section>
 
  <!-- 질문 댓글 -->
  <section id="content"></section>
</div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // }
    ...mapGetters(['fetchedItem']),
  },
  created() {
    // params의 값을 받아옴
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
};
</script>

<style>
#question {
  padding: 30px 20px 0 20px;
}
.user-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.fa-user {
  font-size: 1rem;
}
.user-info {
  margin: 0 15px 0 10px;
  font-weight: bold;
}
.user-info:hover {
  text-decoration: underline;
}
.time-ago {
  font-size: 0.7rem;
  color: grey;
  font-style: italic;
}
#title { margin-bottom: 50px;}
</style>