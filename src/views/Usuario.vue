<template>
    <section class="usuario-secao">
        <div class="usuario-infos">
             <div><img :src="usuario.avatar_url" alt=""></div> 
            <h3>{{ usuario.name }}</h3>
            <h4>{{ usuario.login }}</h4>
            <div class="dados" v-if="usuario.company"><img class="icone" src="../images/suitcase.svg"><span>usuario.company</span></div>
            <div class="dados" v-if="usuario.location"><img class="icone" src="../images/location.svg"><span>{{usuario.location}}</span></div>
            <div class="dados" v-if="usuario.public_repos"><img class="icone" src="../images/repo.svg"><span>{{usuario.public_repos}}</span></div>
            <div class="dados" v-if="usuario.followers"><img class="icone" src="../images/people.svg"><span>{{usuario.followers}}</span></div>
        </div>

        <div class="usuario-repositorios">
          <ListaRepos :maxResult="maxResult" />
          <button class="verMais" @click="maxResult += 3">Ver mais repositórios</button>
        </div>
    </section>
</template>

<script>

import ListaRepos from '../components/ListaRepositorios.vue'

export default {
  name: 'usuario',
  components:{
    ListaRepos
  },
  data(){
    return{
      maxResult: 3,
      repositorios: null
    }
  },
  computed:{
    usuario(){
      return this.$store.state.usuario
    }
  },
  methods: {
    fetchRepositorios(){
      const usuario = this.$store.state.usuario
      const url = `https://api.github.com/users/${usuario.login}/repos?direction=desc`;
       fetch(url)
         .then((r) => r.json())
         .then((r) => {
           this.repositorios = r;
           console.log(this.repositorios)
      });
    }
  },
  
}
</script>

<style scoped>
.usuario-secao{
  margin: 36px 42px;
  display: grid;
  grid-template-columns: 339px auto;
  gap: 70px;
}
.usuario-infos{
  padding: 20px;
  background: #D9D9D9;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0 0 0 /25%); 
  max-height: 644px;
}
img{
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 5px;
}
h3{
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
  margin: 14px 0px 0px 0px;
}
h4 {
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #757575;
  margin: 0px 0px 40px 0px;
}
.dados{
  display: flex;
  align-items: center;
  gap:10px ;
  margin-top: 16px;
}
.dados span{
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 20px;
  color: #757575;
}
.icone{
  width: 26px;
  height:24px;
}
</style>
