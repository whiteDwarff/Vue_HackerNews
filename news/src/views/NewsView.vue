<template>
  <div id="news">
    <ListItem/>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"
// import bus from "../utils/bus.js";
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    this.$store.dispatch('START_SPNNINER');
    // bus.$emit('start:spinner');
  },
  components: {
    ListItem,
  }
};
</script>
