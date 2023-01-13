<template>
  <section class="container"> 
    <div class="titulo-pagina">
      <img src="../images/Vector.png" alt=""> 
      <h2>Repositórios favoritos</h2>
    </div> 
    <div v-if="repositorios.length > 0">
      <ListaFavoritos :maxResult="maxResult" />
      <button class="verMais" @click="maxResult += 3">Ver mais</button>
    </div>
    <div v-else>
      <h3>Nenhum favorito salvo</h3>
    </div>
  </section>
</template>

<script>
import ListaFavoritos from '../components/ListaFavoritos.vue'

export default {
  name: 'favoritos',
  components: {
    ListaFavoritos
  },
  data(){
  return{
    maxResult: 3
    }
  },
  computed: {
    repositorios(){
      return this.$store.state.favoritos
      }
    },
  }

</script>

 <style scoped>
 .titulo-pagina{
  display: flex;
  align-items: center;
  margin-bottom: 30px;
 }
 h2{
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  color: #000;
  margin: 0px;
 }
 img{
  height: 48px;
  width: 50px;
  display: block;
  margin-right: 18px;
 }

</style>
