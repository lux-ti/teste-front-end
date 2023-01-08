<template>
  <button
    class="btn-favorite"
    :class="repoIsFavorited ? 'favorited' : ''"
    @click="
      repoIsFavorited
        ? removeRepoFromFavorites(repo.id)
        : favoriteRepoHandler(repo)
    "
    :title="
      repoIsFavorited ? 'desmarcar como favorito' : 'marcar como favorito'
    "
  >
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.12202 41.5949L21.0623 34.5913L34.0025 41.5949L31.5312 26.761L42 16.2555L27.5324 14.0913L21.0623 0.59491L14.5921 14.0913L0.124512 16.2555L10.5934 26.761L8.12202 41.5949ZM29.2325 34.8361L21.0623 30.4141L12.8921 34.8361L14.4524 25.4702L7.84259 18.8372L16.9772 17.4708L21.0623 8.94943L25.1474 17.4708L34.2819 18.8372L27.6721 25.4702L29.2325 34.8361Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script>
import { computed } from "vue";
import store from "../storeFavorites";

export default {
  name: "BtnFavoriteRepo",
  props: ["repo"],
  setup() {
    const state = computed(() => store.state);

    const addRepoToFavorites = (repoObj) => {
      store.actions.addRepoToFavorites(repoObj);
    };

    const removeRepoFromFavorites = (id) => {
      store.actions.removeRepoFromFavorites(id);
    };

    return {
      state,
      addRepoToFavorites,
      removeRepoFromFavorites,
    };
  },
  methods: {
    //adiciona o repositório ao global state.
    favoriteRepoHandler(repoObj) {
      const newRepo = {
        name: repoObj.name,
        description: repoObj.description,
        stargazers_count: repoObj.stargazers_count,
        id: repoObj.id,
      };
      this.addRepoToFavorites(newRepo);
    },
  },
  computed: {
    repoIsFavorited() {
      return this.state.favoritedRepositories.some(
        (repository) => repository.id === this.repo.id
      );
    },
  },
};
</script>

<style scoped>
.btn-favorite.favorited {
  color: #ffc700;
}
</style>
