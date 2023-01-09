<script setup lang="ts">
import {reactive} from 'vue';
import commonProps from "./props/commonProps";
import { typeSearch } from "@/stores/typeSearch";

defineProps(commonProps);

const currentType = typeSearch();

const data = reactive({
  currentPage: 2
})

function getMoreData() {
  currentType.getMoreData(data.currentPage++)
}

</script>

<template>
  <div class="repositorie-list">
    <div
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
      <img class="fav-icon" src="@/assets/img/starIcon.png">
    </div>
    <button class="show-more-button" @click="getMoreData">Ver Mais</button>
  </div>
</template>

<style scoped>
  .repositorie-list{
    margin-top: 2rem;
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