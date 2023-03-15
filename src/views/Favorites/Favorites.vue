<template>
  <div>
    <div class="header">
    <img src="@/assets/img/github-title.png" alt="" />
    <div class="header-options">
      <router-link to="/">Início</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </div>
  </div>
    <div class="title">
      <img src="@/assets/img/github-logo.png" alt="" />
      <h1>Repositórios Favoritos</h1>
    </div>
      <RepositoriesList />
    
  </div>
</template>

<script setup lang="ts">
import RepositoriesList from '@/components/RepositoriesList/RepositoriesList.vue'
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  margin-left: 1rem;
}

.title {
  margin: 20px 30px;
  display: flex;
  align-items: center;
}
.title img {
  width: 60px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d9d9d9;
  width: 100%;
  height: 5vh;
}
.header-options > a {
  text-decoration: none;
  margin-left: 10px;
  margin-right: 20px;
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  font-family: sans-serif;
}
</style>
