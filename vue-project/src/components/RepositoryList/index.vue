<script setup lang="ts">
import {reactive} from 'vue';
import commonProps from "./props/commonProps";
import { typeSearch } from "@/stores/typeSearch";
import favIcon from '@/assets/img/starIconFav.png'
import starIcon from '@/assets/img/starIcon.png'

const {repositories} = defineProps(commonProps);

const currentType = typeSearch();

const data = reactive({
  currentPage: 2
})

function getMoreData() {
  if(currentType.getCurrentUser?.login) {
    currentType.setCurrentRepository(currentType.getCurrentUser?.login, data.currentPage++)
    return
  }
  currentType.getMoreData(data.currentPage++);
}

function teste(index: any) {
  if(currentType?.getFavorites && repositories.length) {
    for (var i = 0; i < currentType.getFavorites.length; i++) {
      if(currentType.getFavorites[i].id == repositories[index].id) {
        return true
      }
    }
  }
  return false
}

function addFavorite(index: any) {
  currentType.actionFavorite(repositories[index]);
}

</script>

<template>
  <div class="repositorie-list">
    <div
      v-if="repositories.length"
      v-for="(repositorie, index) in repositories"
      class="repositories"
      :key="index">
      <h1>
        {{ repositorie.name }}
      </h1>
      <p>
        {{ repositorie.description }}
      </p>
      <div class="rates">
        <img src="@/assets/img/starIcon.png">
        <span>
          {{ repositorie.stargazers_count }}
        </span>
      </div>
      <hr>
      <img class="fav-icon" :src="teste(index) ? favIcon : starIcon" @click="addFavorite(index)">
    </div>
    <button class="show-more-button" @click="getMoreData" v-if="repositories.length && !removeButton">Ver Mais</button>
    <div v-if="!repositories.length">
      <h1>Nenhum Registro encontrado</h1>
    </div>
  </div>
</template>

<style scoped>
h1{
  font-family: sans-serif;
}
  .repositorie-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .repositories {
    width: 100%;
    position: relative;
    font-family: sans-serif;
  }

  .repositories h1{
    margin-top: 15px;
    font-size: 36px;
  }
  .repositories p {
    margin-top: 1rem;
    color: #757575;
    font-size: 24px;
  }
  .repositories div{
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .repositories div span{
    margin-top: 7px;
    margin-left: 10px; 
  }
  .repositories hr{
    margin-top: 30px;
  }

  .fav-icon {
    position:absolute;
    right: 0;
    top: 10px;
    width: 31px;
    cursor: pointer;
  }

</style>