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

  .icon {
    margin-right: .5em;
  }

  .list-repos {
    width: 100%;
    margin: 0 5%;
  }

  .list-repos p,
  .list-repos span {
    color: #757575;
  }

  .list-repos span {
    font-size: small;
  }

  .list-repos img {
    height: 18px;
  }

  .list-repos li {
    list-style: none;
  }

  .list-repos h1 {
    font-weight: 400;
  }

  .count {
    font-size: 16px;
    text-align: center;
  }

</style>
