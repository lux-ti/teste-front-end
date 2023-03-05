<template>
  <div>
    <h2><i class="fa-brands fa-github"></i> Repositórios Favoritos</h2>
    <p v-if="!favoritedRepositories.length">
      Não há repositórios favoritados
    </p>
    <RepositoriesList v-else
      :repositoriesList="repositoriesList"
      @loadMore="loadMore"
      :FinishedList="FinishedList"
    />
  </div>
</template>
  
<script>
import RepositoriesList from "../components/RepositoriesList.vue";
import Store from '../FavoritesStore';

const store = new Store();

export default {
  name: "Favoritos",
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    loadMore() {
      this.currentPage++;
    },
  },
  computed: {
    favoritedRepositories() {
      return store.getFavoritesRepositories();
    },
    repositoriesList() {
      if (this.favoritedRepositories)
        return this.favoritedRepositories.slice(0, this.currentPage * 3);
    },
    FinishedList() {
      if (this.currentPage * 3 >= this.favoritedRepositories.length) {
        return true;
      }

      return false;
    },
  },
  components: { RepositoriesList }
};
</script>
  
<style scoped>
h2 {
  margin: 2rem;
  font-size: 45px;
  font-weight: 300;
}
</style>
  