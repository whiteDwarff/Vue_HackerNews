<template>
  <div id="ask">
    <ListItem/>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"
import ListMixin from "../mixins/ListMixin.js"

export default {
  mixins: [ListMixin],
  components: {
    ListItem,
  }
};
</script>