<template>
    <div id="app">
    <ToolBar />
    <!-- <transition name="page">
      <router-view></router-view>
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
    <SpinnerView :loading="true" />
  </div>
</template>

<script>
import ToolBar from "./components/HeaderToolBar.vue";
import SpinnerView from "./components/SpinnerView.vue";

export default {
  name: "App",
  components: {
    ToolBar,
    SpinnerView,
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
  transition: opacity 0.2s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
