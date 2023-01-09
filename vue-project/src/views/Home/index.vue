<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import InputCustom from "@/components/Inputs/InputCustom.vue";
import TypeButtons from "./Components/TypeButtons.vue";
import { useModal } from '@/stores/modal';
import { typeSearch } from "@/stores/typeSearch";

const currentType = typeSearch();
const store = useModal();
const router = useRouter();

const data = reactive({
  searchData: "" as string,
});

const { searchData } = toRefs(data);

async function sendDataToSearch() {
  try {

    currentType.setSearchData(data.searchData);

    const result = await currentType.searchList();

    if(!result.data.items.length) {
      throw new Error("");
    }

    currentType[currentType.getCurrentType ? 'setRepository': 'setUsers'](result.data.items);

    return router.push({path:currentType.getCurrentType ? 'repositories': 'users'});

  }catch(e) {
    store.actionModal(true);
  }
}
</script>

<template>
  <div class="home-page">
    <img src="@/assets/img/LogoGithub.png" alt="Logo Github" />
    <TypeButtons />
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
