<template>
  <main>
    <div class="container">
      <h2 class="h2">Repositórios favoritos</h2>
      <p v-if="!favoritedRepositories.length">
        Não há repositórios favoritados.
      </p>
      <LayoutRepositories
        v-else
        :repositoriesList="repositoriesList"
        @loadMore="loadMoreRepos"
        :listHasFinished="listHasFinished"
      />
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import store from "../storeFavorites";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";

export default {
  name: "Favoritos",
  setup() {
    const favoritedRepositories = computed(
      () => store.state.favoritedRepositories
    );

    return {
      favoritedRepositories,
    };
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    loadMoreRepos() {
      this.currentPage++;
    },
  },
  computed: {
    repositoriesList() {
      if (this.favoritedRepositories)
        return this.favoritedRepositories.slice(0, this.currentPage * 3);
    },
    listHasFinished() {
      if (this.currentPage * 3 >= this.favoritedRepositories.length) {
        return true;
      }

      return false;
    },
  },
  components: { LayoutRepositories },
};
</script>

<style scoped>
.h2 {
  margin-bottom: 2rem;
  font-size: 45px;
  font-weight: 300;
}
</style>
