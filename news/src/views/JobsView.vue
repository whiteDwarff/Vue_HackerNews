<template>
  <div id="jobs">
    <ListItem />
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
  components: {
    ListItem
  }
};
</script>
