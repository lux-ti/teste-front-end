<template>
  <div class="main-container">
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
import { useFavoritosStore } from '@/store'
import { computed } from 'vue'

export default {
  name: 'UserSelec',
  components: {
    Repos,
    RepCard
  },
  setup() {
    // configurando a store para ter acesso a lista
    const favoritos = useFavoritosStore()
    return {
      // usando o computed para renderizar o componente caso a lista seja modificada
      favoritos: computed(() => favoritos.lista),
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto+Mono&display=swap');

.main-container {
  text-align: center;
  padding: 50px;
}

.title {
  display: flex;
  padding-bottom: 42px;
  font-family: 'Roboto Mono';
  font-size: 45px;

}

.title-fav {
  text-align: center;
  font-size: 42px;
  color: #222;
  padding-left: 18px;
}

li {
  list-style: none;
  border-bottom: 1px solid #000000;
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


  .title-fav {
    font-size: 30px;
  }

}
</style>
