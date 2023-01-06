<template>
  <main>
    <div class="container">
      <!-- apenas aparece o comp. "Loading" no primeiro fetch-->
      <Loading v-if="loading && !dataItems.length" />
      <p v-if="error">Ocorreu um erro. Tente novamente.</p>
      <LayoutRepositories
        v-if="dataItems.length"
        :repositoriesList="dataItems"
        @loadMore="loadMoreDataHandler"
        :listHasFinished="listHasFinished"
      />
    </div>
  </main>
</template>

<script>
import useGetData from "../useGetData";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";
import Loading from "../utilities/Loading.vue";

export default {
  name: "Repositories",
  components: { LayoutRepositories, Loading },
  setup() {
    const { loadMoreDataHandler, dataItems, loading, error, listHasFinished } =
      useGetData();

    return { loadMoreDataHandler, dataItems, loading, error, listHasFinished };
  },
};
</script>
