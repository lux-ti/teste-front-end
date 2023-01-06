<template>

    <div class="main-container">
      <ul>      
        <li v-for="repo in repos">
           <RepCard :titulo=repo.name :descricao=repo.description :stars=repo.stargazers_count />
        </li>
      </ul>
    </div>

</template>

<script>
import RepCard from './RepCard.vue'

export default {
  name: 'ReposList',
  props:{
    query: String,
  },
  async setup(props){
    const repo = props.query;
    const reqRepo = await fetch(`https://api.github.com/search/repositories?q=${repo}`);
    const data = await reqRepo.json();
    console.log(data);
    return {repos:data.items}    
  },
  components: {
    RepCard
  },
}
</script>

<style scoped>
.main-container-repos {
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

button {
  background-color: #000000;
  background-image: url("/public/img/searchw.png") no-repeat;
  padding: 0.5rem;
  cursor: pointer;
}

input {
  background: #FFFFFF;
  border: solid #000000;
  padding: 10px;
  width: 20%;
}
</style>

