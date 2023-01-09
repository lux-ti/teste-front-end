<script setup lang="ts">
import {onMounted} from 'vue';
import {useRouter} from 'vue-router';
import { typeSearch } from "@/stores/typeSearch";
import RepositoryList from "@/components/RepositoryList/index.vue";

const currentType = typeSearch();

const router = useRouter()

onMounted(() => {
  if(!currentType.getDataRepository.length) {
    router.push({path:'/'})
  }
})
</script>

<template>
  <div class="default-spacing">
    <RepositoryList
      class="repository-component"
      :repositories="currentType.getDataRepository"
    />
  </div>
</template>