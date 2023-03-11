<template>
  <div class="userPage">
    <div class="userDetails">
      <img :src=userData.avatar_url />
      <h3>{{userData.name}}</h3>
      <p>{{userData.login}}</p>
      <i><font-awesome-icon icon="fa-solid fa-briefcase" />{{userData.company}}</i>
      <i><font-awesome-icon icon="fa-solid fa-map-pin" />{{userData.location}}</i>
      <i><font-awesome-icon icon="fa-solid fa-box" />{{ repos.length }}</i>
      <i><font-awesome-icon icon="fa-solid fa-users" />{{userData.followers}}</i>
    </div>
    <div class="repoList">
      <div v-for="repo in repos" :key="repo.id">
        <RepoCard
          :name="repo.name"
          :description="repo.description"
          :star="repo.stargazers_count"
          :userName="repo.name"
          :repo="repo"
          :color="store.favorites.includes(repo) ? '#FFBF00' : 'black'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store.js";
import RepoCard from "../components/RepoCard.vue";
import Btn from "../components/Button.vue";
export default {
  name: "UserProfile",
  components: {
    RepoCard,
    Btn,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  data() {
    return {
      userData: [],
      repos: [],
    };
  },
  methods: {
    async fetchUser() {
      const res = await fetch(
        " https://api.github.com/users/" + `${this.store.userName}`
      );
      let data = await res.json();
      return data;
    },
    async fetchRepos() {
      const res = await fetch(
        "https://api.github.com/users/" + `${this.store.userName}/repos?direction=desc`
      );
      let data = await res.json();
      return data;
    },
  },
  async created() {
    this.userData = await this.fetchUser();
    this.repos = await this.fetchRepos();
  },
};
</script>

<style lang="scss" scoped>
.userPage {
  display: flex;
  margin: 30px 17px 0 17px;
  svg {
    width: fit-content;
  }
}
.repoList {
  width: 95%;
}
.userDetails {
  background-color: #d9d9d9;
  max-width: 340px;
  height: 644px;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
  box-shadow: 4px 4px 4px #00000045;
  border-radius: 5px;
  margin-right: 20px;
  img {
    margin: 20px 0 20px 0;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    filter: drop-shadow(0px 0px 4px rgb(0 0 0 / 10%));
  }
  h3 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 30px;
  }
  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #757575;
    margin-bottom: 40px;
  }
  i {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #757575;
    margin-bottom: 15px;
  }
  svg {
    width: 20px;
    height: 20px;
    color: black;
    margin-right: 10px;
  }
}
</style>
