import { reactive } from "vue";

const store = {
  state: reactive({
    favoritedRepositories: [],
  }),
  getters: {
    getFavoritedRepositories() {
      return store.state.favoritedRepositories;
    },
  },
  actions: {
    addRepoToFavorites(repo) {
      store.state.favoritedRepositories = [
        ...store.state.favoritedRepositories,
        repo,
      ];
    },
    removeRepoFromFavorites(id) {
      store.state.favoritedRepositories =
        store.state.favoritedRepositories.filter((repo) => repo.id !== id);
    },
  },
};

export default store;
