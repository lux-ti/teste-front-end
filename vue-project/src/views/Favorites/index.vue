<script setup lang="ts">
import { typeSearch } from "@/stores/typeSearch";
import RepositoryList from "@/components/RepositoryList/index.vue";

const currentType = typeSearch();

</script>

<template>
<div>
  <div class="title">
    <img src="@/assets/img/LogoGithub.png" alt="Logo Github" />
    <h1>Repositórios Favoritos</h1>
  </div>
  <RepositoryList
    :repositories="currentType.getFavorites"
    :remove-button="true"
  />
</div>
</template>

<style scoped>
h1{
  font-family: sans-serif;
  margin-left: 1rem;
  font-size: 45px;
}
img{
  width: 60px;
}
.title{
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}
</style>