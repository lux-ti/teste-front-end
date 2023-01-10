<template>
  <header>
    <nav class="box_navegacao">
      <router-link to="/" class="logo">
        <img src="/src/assets/image/GitHubSearch.png" alt="logomarca" />
      </router-link>
      <div>
        <router-link to="/">INÍCIO </router-link>
        <router-link to="/favoritos" class="favorit">FAVORITOS</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
header {
  background-color: #d9d9d9;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
}

.box_navegacao {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.favorit {
  margin-right: 50px;
}
.logo img {
  padding: 20px;
  display: flex;
}
</style>
