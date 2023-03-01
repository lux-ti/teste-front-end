import { reactive } from "vue";

class Store {
  constructor() {
    this.state = reactive({
      favoritesRepositories: [],
    });
  }

  getFavoritesRepositories() {
    return this.state.favoritesRepositories;
  }

  addRepoToFavorites(repo) {
    this.state.favoritesRepositories = [
      ...this.state.favoritesRepositories,
      repo,
    ];
  }

  removeRepoFromFavorites(id) {
    this.state.favoritesRepositories =
      this.state.favoritesRepositories.filter((repo) => repo.id !== id);
  }
}

export default new Store();
