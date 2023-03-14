<template>
  <div class="header">
    <img src="@/assets/img/github-title.png" alt="" />
    <div class="header-options">
      <router-link to="/">Início</router-link>
      <router-link to="/favorites">Favoritos</router-link>
    </div>
  </div>
  <div class="list-users">
    <div class="card-users">
      <img src="@/assets/img/profile-photo.png" />
      <p>Limdemberg</p>
    </div>
    <div class="card-users">
      <img src="@/assets/img/profile-photo.png" />
      <p>Limdemberg</p>
    </div>
  </div>
  <div class="bottom-options">
    <button class="button-more">Ver Mais</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const data = reactive({
  dataBinBin: '' as string
})
const { dataBinBin } = toRefs(data)
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
.list-users {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 70px;
}

.title-card {
}

.card-users {
  display: flex;
  box-shadow: 0px -2px 26px -10px rgba(0,0,0,0.6);
  width: 100%;
  border-radius: 10px;
  margin: 10px 30px;
  /* width: 650px;
  margin: 20px;
  justify-content: flex-start;
  align-items: center; */
}
.card-users p {
  margin: 20px 10px;
  font-weight: bold;
  font-size: 2rem;
  font-family: sans-serif;
}
.card-users img {
  margin: 10px 15px;
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
