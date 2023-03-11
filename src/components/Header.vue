<template>
  <header>
    <div class="title">
      <router-link to="./"><b>GitHub</b> Search</router-link>
    </div>
    <nav>
      <Nav text="INÍCIO" to="/home"/>
      <Nav text="FAVORITOS" to="/favorites" />
    </nav>
  </header>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  name: "Header",
  props: {
    color: String,
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 84px;
  align-items: center;
}
nav {
  font-family: "Inter", sans-serif;
  width: 391px;
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
  a {
    text-decoration: none;
    font-size: 20px;
  }
  a:visited {
    color: black;
  }
  a.router-link-active {
    color: red;
  }
}
.title {
  font-family: "Roboto Mono", monospace;
  font-size: 32px;
  width: 298px;
  text-align: center;
  word-spacing: -0.3em;
  font-weight: 500;
  letter-spacing: -0.05em;
  a {
    text-decoration: none;
    font-style: italic;
  }
  a:visited {
    color: black;
  }
  b {
    font-weight: 700;
    font-style: normal;
  }
}
</style>
