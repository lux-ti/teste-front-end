<template>
  <Header/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div :key="$route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto&family=Roboto+Mono:ital,wght@0,400;0,700;1,500&family=Rubik:wght@300;400&display=swap");
@import "../public/style.css";
</style>