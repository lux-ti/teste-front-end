<template>
  <div>
    <div class="title">
      <img src="/img/Vector_.png" alt="Logo GitHub">
      <h2 class="title-fav">Repositórios Favoritos</h2>
    </div>
    <div>
      <Repos />
    </div>

  </div>
</template>

<script>
import Repos from './Repos.vue'

export default {
  name: 'UserSelec',
  components: {
    Repos,
  },
  mounted() {
    fetch('http://localhost:3000/favoritos')
      .then(resposta => resposta.json())
      .then(dados => console.log(dados))
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto+Mono&display=swap');

.title {
  display: flex;
  position: absolute;
  padding: 50px;
  font-family: 'Roboto Mono';
  font-size: 45px;

}

.title-fav {
  text-align: center;
  font-size: 42px;
  color: #222;
  padding-left: 18px;
}
</style>



