<script setup lang="ts">
import {reactive, onMounted} from "vue"
import { typeSearch } from "@/stores/typeSearch";
import RepositoryList from "./Components/RepositoryList.vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  if(!currentType.getDataRepository.length) {
    router.push({path:'/'})
  }
})

const data = reactive({
  currentPage: 2
})

const currentType = typeSearch();

function getMoreRepositories() {
  currentType.getMoreRepositories(data.currentPage++)
}
</script>

<template>
  <div class="teste">
    <RepositoryList
      :repositories="currentType.getDataRepository"
    />
    <button class="show-more-button" @click="getMoreRepositories">Ver Mais</button>
  </div>
</template>

<style scoped>

.teste {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-more-button{
  margin-top: 2rem;
  width: 150px;
  height: 30px;
  border: 1px solid black;
  background-color: transparent;
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
}

</style>