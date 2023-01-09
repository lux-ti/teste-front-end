<script setup lang="ts">
import {reactive, onMounted} from "vue"
import UsersList from "./Components/UsersList.vue";
import { typeSearch } from "@/stores/typeSearch";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  if(!currentType.getDataUsers.length) {
    router.push({path:'/'})
  }
})

const data = reactive({
  currentPage: 2
})

function getMoreUsers() {
  currentType.getMoreData(data.currentPage++)
}
const currentType = typeSearch();
</script>

<template>
  <div class="users">
    <UsersList
      :users="currentType.getDataUsers"
    />
    <button class="show-more-button" @click="getMoreUsers">Ver Mais</button>
  </div>
</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>