<template>

  <div class="main-container">
    <ul>
      <li v-for="repo in repos">
        <RepCard :titulo=repo.name :descricao=repo.description :stars=repo.stargazers_count />
      </li>
    </ul>

    <button @click="exibemais()" id="pessoa">Ver mais</button>
  </div>

</template>

<script>
import RepCard from './RepCard.vue'

export default {
  name: 'ReposList',
  props: {
    query: String,
  },
  async setup(props) {
    const repo = props.query;
    const reqRepo = await fetch(`https://api.github.com/search/repositories?q=${repo}&per_page=4`);
    const data = await reqRepo.json();
    console.log(repo);
    //console.log(data);
    return { repos: data.items }
  },
  components: {
    RepCard
  },
  methods: {
    exibemais() {
      console.log("fui clicado");
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
</style>

