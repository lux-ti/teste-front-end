<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    
  },
};
</script>

<style>
body,
ul,
li,
h1,
h2,
p {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  color: black;
}
a {
  text-decoration: none;
  margin: 10px;
  color: #000000;
}
img {
  max-width: 100%;
  display: block;
}
.router-link-exact-active {
  color: #ff0000;
  font-weight: bold;
}
</style>
