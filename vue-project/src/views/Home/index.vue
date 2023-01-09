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
        @keyup.enter="sendDataToSearch"
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  margin-top: 1.5rem;
  position: relative;
}
.input-search {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #000000;
  width: 780px;
  font-size: 24px;
  height: 59px;
  padding-left: 30px;
  border-radius: 10px;
}

.search-icon {
  position: absolute;
  top: 13px;
  cursor: pointer;
  right: 14px;
  width: 34px;
}
</style>
