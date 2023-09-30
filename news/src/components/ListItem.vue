<template>
  <div>
    <li v-for="(item, i) in listItems" :key="i" class="post">
      <!-- Numbering, item.porint가 있다면 렌더링 / 없다면 index -->
      <span class="points">{{ item.points || i + 1 }}</span>
      <div>
        <p class="news-title">
          <!-- News View -->
          <template v-if="item.domain">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
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
  computed: {
    listItems() {
      return this.$store.state.list;
    }
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