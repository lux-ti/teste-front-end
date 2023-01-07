<template>
  <main>
    <div class="container">
      <!-- apenas aparece o comp. "Loading" no primeiro fetch-->
      <Loading v-if="loading && !dataItems.length" />
      <Error
        v-if="!loading && data && !dataItems.length && !error"
        :value="repoValue"
      />
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
import useGetData from "../hooks/useGetData";
import Error from "../utilities/Error.vue";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";
import Loading from "../utilities/Loading.vue";

export default {
  name: "Repositories",
  components: { LayoutRepositories, Loading, Error },
  setup() {
    const {
      loadMoreDataHandler,
      dataItems,
      loading,
      error,
      data,
      listHasFinished,
    } = useGetData();

    return {
      loadMoreDataHandler,
      dataItems,
      loading,
      error,
      data,
      listHasFinished,
    };
  },
  computed: {
    repoValue() {
      return this.$route.query.q;
    },
  },
};
</script>
