<template>
  <div id="app">
    <TopHeader />
     <router-view></router-view>
  </div>
</template>

<script>

import TopHeader from './components/TopHeader.vue'

export default {
  name: 'App',
  components:{
    TopHeader
  },
  methods:{
    pegarFavoritos(){
      if(window.localStorage.length > 0){
        let listaFavoritos = JSON.parse(localStorage.getItem('Favoritos'))
        this.$store.state.favoritos = listaFavoritos
        console.log(this.$store.state.favoritos)
      } 
    }
  },
  created(){
    this.pegarFavoritos()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono&family=Rubik:wght@400;500&display=swap');

body, p{
  margin: 0px;
  padding: 0px;
  font-family: 'Inter';
}
ul{
  list-style: none;
  display: flex;
}
a{
  text-decoration:none;
  color: #000;
} 
img{
  max-width: 100%;
  display: inline-block;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
}
.router-link-active{
  color:#FF0000;
}
.view{
  margin-top: 50px;
}
.verMais{
  cursor: pointer;
  margin: 74px auto;
  border: 3px solid black;
  font-family: 'Rubik';
  font-size: 24px;
  font-weight: 400;
  border-radius: 10px;
  padding: 10px 28px;
  display: block;
}
</style>
