<script setup lang="ts">
import commonProps from "./props/commonProps";

defineProps(commonProps);

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
  </div>
</template>

<style scoped>
  .repositorie-list{
    width: 100%;
    margin-top: 2rem;
  }
  .repositories {
    position: relative;
    font-family: sans-serif;
    margin-left: 50px;
    margin-right: 50px;
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