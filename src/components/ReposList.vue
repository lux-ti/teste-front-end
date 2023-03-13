<template>
  <div class="main-container">
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <RepCard :id="repo.id" :titulo="repo.name" :descricao="repo.description" :stars="repo.stargazers_count" />
      </li>
    </ul>

    <button v-if="showButton" @click="loadMore">Ver mais</button>
  </div>
</template>

<script>
import RepCard from './RepCard.vue'

export default {
  name: 'ReposList',
  props: {
    query: String
  },
  components: {
    RepCard
  },
  data() {
    return {
      repos: [],
      page: 1,
      perPage: 4,
      showButton: false
    }
  },
  async created() {
    await this.loadRepos()
  },
  methods: {
    async loadRepos() {
      const res = await fetch(`https://api.github.com/search/repositories?q=${this.query}&per_page=${this.perPage}&page=${this.page}`)
      const data = await res.json()

      if (data.items.length > 0) {
        this.repos = [...this.repos, ...data.items]
        this.showButton = true
      } else {
        this.showButton = false
      }
    },

    async loadMore() {
      this.page += 1
      await this.loadRepos()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.main-container {
  text-align: center;
  padding: 50px;
}

.repos-busca {
  display: flex;
  /* margin-top: 48px; */
  justify-content: flex-end;
}

li {
  list-style: none;
  border-bottom: 1px solid #000000;
}

input {
  background: #FFFFFF;
  border: solid #000000;
  padding: 10px;
  width: 20%;
}

button {
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 74px;
}

button:hover {
  background: #000000;
  color: #FFFFFF;
}

@media (max-width: 768px) {
  img {
    display: none;
  }

  .main-container {
    text-align: center;
    padding: 0px;
    margin: 10px;
  }
}
</style>

