<script setup lang="ts">
import { reactive, toRefs } from "vue";
import InputCustom from "@/components/Inputs/InputCustom.vue";
import TypeButtons from "./Components/TypeButtons.vue";
import HttpService from '@/core/HttpServices'
import { useModal } from '@/stores/modal';

const store = useModal();

const service = new HttpService();

const data = reactive({
  searchData: "" as string,
  currentType: true as boolean,
});

const { searchData, currentType } = toRefs(data);

async function sendDataToSearch() {
  try {
    const result = await service.searchList(data.currentType, {
      q: data.searchData,
      page: 1
    });

    if(!result.data.length) {
      throw new Error("");
    }
  }catch(e) {
    store.actionModal(true);
  }
}
</script>

<template>
  <div class="home-page">
    <img src="@/assets/img/LogoGithub.png" alt="Logo Github" />
    <TypeButtons @change-type="(value) => (currentType = value)" />
    <div class="search">
      <InputCustom
        v-model="searchData"
        class="input-search"
        placeholder="Buscar..."
      />
      <img
        @click.prevent="sendDataToSearch"
        class="search-icon"
        src="@/assets/img/searchsearch.svg"
      />
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}
.search {
  margin-top: 2rem;
  position: relative;
}
.input-search {
  width: 600px;
  padding: 15px;
  border-radius: 5px;
}

.search-icon {
  position: absolute;
  top: 11px;
  cursor: pointer;
  right: 20px;
}
</style>
