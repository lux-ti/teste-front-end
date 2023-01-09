<template>
  <div class="navbar default-spacing">
    <img src="@/assets/img/TitleSite.png" alt="">
    <div class="navigation-options">
      <router-link to="/">INÍCIO</router-link>
      <router-link to="/favorites">FAVORITOS</router-link>
    </div>
  </div>
</template>


<style scoped>
  .navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation-options > a{
    text-decoration: none;
    margin-left: 10px;
    margin-right: 20px;
    color: #000;
    font-weight: bold;
    font-size: 20px;
    font-family: sans-serif;
  }
</style>