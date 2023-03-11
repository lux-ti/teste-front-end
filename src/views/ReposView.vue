<template>
  <div v-for="repo in repos" :key="repo.id">
    <RepoCard
      :name="repo.name"
      :description="repo.description"
      :star="repo.stargazers_count"
      :userName="repo.full_name"
      :repo="repo"
      :color="store.favorites.includes(repo) ? '#FFBF00' : 'black'"
    />
  </div>
  <Btn @click="appendPage" text="Ver mais" />
  <div ref="myModal" class="warning">
    <div class="content">
      <img src="../assets/warning.png" />
      <h3>Desculpe!</h3>
      <p>Não foi possível encontrar o repositório desejado!</p>
      <router-link to="/home">
        <button>Certo</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store.js";
import RepoCard from "../components/RepoCard.vue";
import Btn from "../components/Button.vue";
export default {
  name: "Repositories",
  components: {
    RepoCard,
    Btn,
  },
  setup() {
    const store = useStore();
    store.page = 1;
    return {
      store,
    };
  },
  data() {
    return {
      repos: [],
    };
  },
  methods: {
    async fetchRepos() {
      const res = await fetch(
        this.store.fetchAddress +
          `repositories?q=${this.store.prompt}&page=${this.store.page}`
      );
      let data = await res.json();
      data = data.items;
      return data.length == 0
        ? (this.$refs.myModal.style.display = "block")
        : data;
    },
    async appendPage() {
      this.store.$patch({
        page: this.store.page + 1,
      });
      const res = await fetch(
        this.store.fetchAddress +
          `repositories?q=${this.store.prompt}&page=${this.store.page}`
      );
      let data = await res.json();
      data = data.items;
      this.repos.push.apply(this.repos, data);
    },
  },
  async created() {
    this.repos = await this.fetchRepos();
  },
};
</script>

<style lang="scss" scoped>
div:first-of-type {
  margin-top: 40px;
}

.warning {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  .content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 444px;
    height: 547px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      position: relative;
      width: 100px;
      height: 100px;
      margin-bottom: 15%;
      margin-top: 14%;
    }
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 58px;
      display: flex;
      margin-bottom: 18%;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      text-align: center;
    }
    button {
      width: 194px;
      height: 72px;
      background: #ff0000;
      border-radius: 10px;
      margin-top: 10%;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      display: flex;
      align-items: center;
      text-align: center;
      border: none;
      justify-content: center;

      color: #ffffff;
    }
    button:hover {
      transition: 0.2s;
      transform: scale(0.9);
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
  }
}
</style>
