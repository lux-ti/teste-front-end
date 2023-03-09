<template>
  <div class="header">
    <img src="@/assets/img/github-title.png" alt="" />
    <div class="header-options">
      <router-link to="/">Início</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </div>
  </div>
  <div class="home-page">
    <img src="@/assets/img/github-logo.png" alt="" />
    <div class="buttons">
      <button class="button-inactive">Repositório</button>
      <button class="button-inactive">Usuário</button>
    </div>
    <input v-model="searchData" class="input-search" placeholder="Buscar..." />
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const data = reactive({
  searchData: '' as string
})
const { searchData } = toRefs(data)
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
}
.input-search {
  width: 650px;
  padding: 15px;
  border-radius: 10px;
  background: url('@/assets/img/search-icon.svg') no-repeat right;
  background-size: 20px;
  background-position: 640px;
  margin: 20px 0px;
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

.buttons {
  margin-top: 3rem;
}
.buttons > button {
  cursor: pointer;
  margin: 10px;
  width: 186px;
  height: 51px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #000000;
  color: #fff;
}
.buttons .button-inactive {
  background-color: #fff;
  border: 1px solid black;
  color: #000;
}
</style>
