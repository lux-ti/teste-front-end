import { reactive } from "vue";

class Store {
  constructor() {
    this.state = reactive({
      favoritesRepositories: [],
    });

    this.actions = {
      addFav: (repo) => {
        this.state.favoritesRepositories = [
          ...this.state.favoritesRepositories,
          repo,
        ];
      },
      removeFav: (id) => {
        this.state.favoritesRepositories =
          this.state.favoritesRepositories.filter((repo) => repo.id !== id);
      }
    }
  }

  getFavoritesRepositories() {
    return this.state.favoritesRepositories;
  }
}

export default new Store();
