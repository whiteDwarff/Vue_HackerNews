<template>
  <div id="app">
    <!-- url 주소에 따라서 보여지는 view -->
    <ToolBar />
    <transition name="page">
      <router-view></router-view>
    </transition>
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
a {
  color: #34495e;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
