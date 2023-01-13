<template>
    <div v-for="(repositorio, index) in repositorios" :key="repositorio.id">
     <div class="resultado-item" v-if="index < maxResult">  
        <div>
          <h3>{{ repositorio.name }} <button href="" :class="favoritos.includes(repositorio) ? 'favorito ativo' : 'favorito'"> <font-awesome-icon icon="fa-regular fa-star" @click="adicionarFavorito(repositorio)"/></button></h3>
          <p>{{ repositorio.description }}</p> 
          <font-awesome-icon icon="fa-regular fa-star" /> <span>{{ repositorio.stargazers_count }}</span>
        </div>
       </div> 
     </div>

</template>

<script>


export default {
  name: 'repositorios',
  props:['maxResult'],
  computed:{
      repositorios(){
        return this.$store.state.repositorios
      },
      favoritos(){
        return this.$store.state.favoritos
      }
    },
  methods:{
    adicionarFavorito(repositorio){
      //verificar se o repositorio já esta incluído nos favoritos, para evitar repositorios duplacados na listagem de favoritos
      if(!this.favoritos.includes(repositorio)){
      this.$store.commit("ADICIONAR_FAVORITO", repositorio)
      localStorage.setItem('Favoritos', JSON.stringify(this.favoritos))
      } 
    },
  }
}
</script>

<style scoped>
.resultado-item{
margin-top: 40px;
padding-bottom: 20px;
border-bottom: 1px solid black;
}
.resultado-item h3{
font-family: Rubik;
font-size: 36px;
font-weight: 400;
line-height: 43px;
display: flex;
justify-content: space-between;
margin-block: 10px;
}

.resultado-item p{
font-family: 'Rubik';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
color: #757575;
margin-bottom: 15px;
}
.resultado-item span{
font-family: 'Rubik';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
color: #757575;
}
.favorito{
background: transparent;
border: none;
font-size: 36px;
cursor: pointer;
}
.favorito:hover{
color: #FFC700;
}
.favorito.ativo{
color: #FFC700;

}

.img{
text-align: center;
margin-bottom: 70px;
}

</style>
