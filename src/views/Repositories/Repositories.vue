<template>
  <div class="header">
    <img src="@/assets/img/github-title.png" alt="" />
    <div class="header-options">
      <router-link to="/">Início</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </div>
  </div>
  <RepositoriesList />
  <div class="bottom-options">
    <button class="button-more">Ver Mais</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import RepositoriesList from '@/components/RepositoriesList/RepositoriesList.vue'

const data = reactive({
  dataRef: '' as string
})
const { dataRef } = toRefs(data)
</script>

<style scoped>
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

.bottom-options {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-more {
  cursor: pointer;
  margin: 10px;
  width: 186px;
  height: 51px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  font-weight: bold;
  background-color: #fff;
  color: #000;
}
</style>
