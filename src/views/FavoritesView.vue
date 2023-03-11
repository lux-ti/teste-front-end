<template>
  <div class="Title">
    <img src="../assets/LogoGit.png" />
    <h2>Repositório Favoritos</h2>
  </div>
  <div v-for="repo in repos" :key="repo.id">
    <RepoCard
      :name=repo.name
      :description=repo.description
      :star=repo.stargazers_count
      :user=repo.full_name
      :repo="repo"
      :color="store.favorites.includes(repo) ? '#FFBF00' : 'black'"
    />
  </div>
</template>

<script>
import {useStore} from "../stores/store.js"
import RepoCard from "../components/RepoCard.vue";
import Btn from "../components/Button.vue";

export default {
  name: "Favorites",
  components: {
    RepoCard,
    Btn,
  },
  setup() {
    const store = useStore();
    return {store}
  },
  data() {
    return {
      repos: this.store.favorites,
    }
  }
};
</script>

<style lang="scss" scoped>
.Title {
  display: flex;
  flex-direction: row;
  margin-left: 2%;
  margin-top: 20px;

  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
}
img {
  width: 50px;
  height: 50px;
  margin-right: 1%;
  margin-bottom: 40px;
}
</style>
