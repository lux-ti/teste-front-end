<script>
import useGetData from "../hooks/GetData";
import Error from "../components/Error.vue";
import RepositoriesList from "../components/RepositoriesList.vue";

export default {
  name: "Repositories",

  components: { RepositoriesList, Error },

  setup() {
    const { 
      loadMore, 
      dataItems, 
      loading, 
      error, 
      data, 
      finishedList 
    } = useGetData();

    return { 
      loadMore, 
      dataItems, 
      loading, 
      error, 
      data, 
      finishedList 
    };
  },

  computed: {
    repoValue() {
      return this.$route.query.q;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <Error
        v-if="!loading && data && !dataItems.length && !error"
        :value="repoValue"
      />
      
      <p v-if="error">Ocorreu um erro. Tente novamente.</p>

      <RepositoriesList
        v-if="dataItems.length"
        :repositoriesList="dataItems"
        @loadMore="loadMore"
        :listHasFinished="finishedList"
      />
    </div>
  </main>
</template>