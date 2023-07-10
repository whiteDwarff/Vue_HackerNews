<template>
  <div id="app">
    <!-- url 주소에 따라서 보여지는 view -->
    <ToolBar />
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/HeaderToolBar.vue";
export default {
  name: "App",
  components: {
    ToolBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: #000;
  list-style: none;
  text-decoration: none;
}
p {
  margin-bottom: 20px;
}
small {
  display: inline-block;
  margin-left: 10px;
}
</style>
