<script setup lang="ts">
import {reactive, toRefs } from "vue";
import InputCustom from "@/components/Inputs/InputCustom.vue";

const data = reactive({
    searchData: 'teste' as string,
});

const { searchData } = toRefs(data);

</script>

<template>
  <div class="home-page">
    <InputCustom
      v-model="searchData"
      class="input-search"
      placeholder="Buscar..."
    />
  </div>
</template>

<style scoped>

  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
  }

  .input-search {
    width: 600px;
    padding: 15px;
    border-radius: 5px;
    background: url("@/assets/img/searchsearch.svg") no-repeat right;
    background-size: 20px;
    background-position: 580px;
  }

</style>
