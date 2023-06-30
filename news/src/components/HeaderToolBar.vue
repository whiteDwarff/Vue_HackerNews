<template>
  <header>
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </header>
</template>

<style scoped>
header {
  color: #fff;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
header a {
  color: white;
  margin: 0 10px;
}
header .router-link-exact-active {
  color: #36495e;
}
</style>