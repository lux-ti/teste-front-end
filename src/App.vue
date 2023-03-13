<template>

  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      logo_src: "/img/GitHub Search.png",
      app_name: "GitHub Search"
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');




* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


a {
  text-decoration: none;
}

.main-container {

  margin: 50px;
  min-height: 250px;
}


h1 {

  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}

button {
  cursor: pointer;
}
</style>

