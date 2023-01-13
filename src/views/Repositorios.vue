<template>
  <section class="container">  
    <ListaRepositorios :maxResult="maxResult" />
    <button class="verMais" @click="maxResult += 3">Ver mais</button>
  </section>
</template>

<script>
import ListaRepositorios from '../components/ListaRepositorios.vue'

export default {
  name: 'repositorios',
  components: {
    ListaRepositorios
  },
  data(){
  return{
    maxResult: 3
    }
  },
}
</script>

 <style scoped>
 

</style>
