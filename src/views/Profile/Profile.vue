<template>
  <div class="header">
    <img src="@/assets/img/github-title.png" alt="" />
    <div class="header-options">
      <router-link to="/">Início</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </div>
  </div>
  <div class="profile-page">
    <div class="profile-card">
      <img src="@/assets/img/profile-photo.png" />
      <h2>Limdemberg</h2>
      <div class="profile-item">
        <p>limdemberg</p>
      </div>
      <div class="profile-items">
        <div class="profile-item">
          <img src="@/assets/img/organization.svg" />
          <p>Lux ONe</p>
        </div>
        <div class="profile-item">
          <img src="@/assets/img/location.svg" />
          <p>Fortaleza</p>
        </div>
        <div class="profile-item">
          <img src="@/assets/img/repository.svg" />
          <p>4</p>
        </div>
        <div class="profile-item">
          <img src="@/assets/img/followers.svg" />
          <p>2</p>
        </div>
      </div>
    </div>
    <RepositoriesList />
  </div>

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

.profile-page {
  display: flex;
}

.profile-card {
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  border-radius: 5px;
  width: 300px;
  height: 500px;
  margin: 30px 5px 5px 30px;
  padding: 10px;
}
.profile-card img {
  width: 250px;
}
.profile-card p {
  color: #757575;
  margin: 10px 5px;
  font-size: 1rem;
  font-family: sans-serif;
}
.profile-card h2 {
  color: #000;
  font-weight: lighter;
  margin: 10px 15px;
  font-family: sans-serif;
}

.profile-item {
  display: flex;
  align-items: center;
}

.profile-item img {
  width: 25px;
}

.profile-items {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 10px;
}
</style>
