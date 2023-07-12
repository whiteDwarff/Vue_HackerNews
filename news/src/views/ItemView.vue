<template>
<div>
  <p>{{ itemInfo.id }}</p>
  <p>{{ itemInfo.title }}</p>
  <p>{{ itemInfo.content }}</p>
  <p>{{ itemInfo.user }}</p>
  <p>{{ itemInfo.time_ago }}</p>
</div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const list = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', list)
  }
};
</script>

<style>
</style>