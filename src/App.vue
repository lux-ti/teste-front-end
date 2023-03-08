<template>
  <NavBar />
  <div id="main">
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';


  export default {
    components: { NavBar },
  }

</script>

<style>
  * {
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
    font-family: "Inter", sans-serif;
  }
  body {
    margin: 0;
  }
  #main {
    padding: 3%;
  }
</style>
