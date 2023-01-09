<template>
  <div>
    <div class="title">
      <img src="/img/Vector_.png" alt="Logo GitHub">
      <h2 class="title-fav">Repositórios Favoritos</h2>
    </div>
    <div>
      <ul class="lista-favoritos">
        <li v-for="favorito in favoritos" :key="favorito.id">
          <RepCard :id=favorito.id :titulo=favorito.titulo :descricao=favorito.descricao :stars=favorito.stars />
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
import Repos from './Repos.vue'
import RepCard from '@/components/RepCard.vue'

export default {
  name: 'UserSelec',
  components: {
    Repos,
    RepCard
  },
  data() {
    return {
      favoritos: null,
    }
  },
  methods: {
    async getFavoritos() {
      const resposta = await fetch('http://localhost:3000/favoritos')
      const data = await resposta.json()
      this.favoritos = data;
      console.log(this.favoritos);
    }
  },
  mounted() {
    this.getFavoritos();
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto+Mono&display=swap');

.title {
  display: flex;
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

.lista-favoritos {
  margin-top: px;
}

li {
  list-style: none;
  border-bottom: 1px solid #000000;
}
</style>



