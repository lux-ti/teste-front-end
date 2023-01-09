<template>
  <div class="navbar">
    <img src="@/assets/img/TitleSite.png" alt="">
    <div class="navigation-options">
      <router-link to="/">Início</router-link>
      <!-- <router-link to="/about">Favoritos</router-link> -->
    </div>
  </div>
</template>


<style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #D9D9D9;
    width: 100%;
    height: 5vh;
  }

  .navbar > * {
    margin-left: 50px;
    margin-right: 50px;
  }

  .navigation-options > a{
    text-decoration: none;
    margin-left: 10px;
    margin-right: 20px;
    color: #000;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: sans-serif;
  }
</style>