<template>
  <div>
    <li v-for="(item, i) in listItems" :key="i" class="post">
      <!-- Numbering -->
      <span class="points">{{ item.points || i + 1 }}</span>
      <div>
        <p class="news-title">
          <!-- News View -->
          <template v-if="item.domain">
            <a :href="item.url">{{ item.title }}</a>
          </template>
          <!-- Ask View -->
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </template>
        </p>
        <small class="link-text" >
          {{ item.time_ago }} by
          <!-- 객체의 속성에 item.user가 있다면 출력할 내용 -->
          <router-link
            v-if="item.user"
            :to="`/user/${item.user}`" class="link-text">
            {{ item.user }}
          </router-link>
          <!-- item.user가 없다면 출력할 내용 -->
          <a v-else :href="item.url" class="link-text">{{ item.domain }}</a>
        </small>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    if (name == "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name == "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name == "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  // computed 속성엔 무조건 return이 포함되어야 한다.
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.ask;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
      return [];
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.points {
  display: inline-block;
  text-align: center;
  width: 40px;
  padding: 0 10px;
  color: #42b883;
}
.link-text {
  color: #828282;
}
</style>