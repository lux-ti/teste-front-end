<template>
  <section class="container">
    <div @click="pegarUsuario(usuario)" v-for="(usuario, index) in usuarios" :key="usuario.id">
      <div class="resultado-item card-usuario" v-if="index < maxResult">
        <img :src="usuario.avatar_url" alt="">
        <h3>{{ usuario.login }}</h3>
      </div>
    </div>
    <button class="verMais" @click="maxResult += 3">Ver mais</button>
  </section>
  
</template>

<script>


export default {
  name: 'usuarios',
  data(){
    return{
      usuario: '',
    }
  },
  data(){
    return{
      maxResult: 3
    }
  },
  computed:{
    usuarios(){
      return this.$store.state.usuarios
    }
  },
  methods:{
    pegarUsuario(usuario){
      this.usuario = usuario.login;
      this.$store.commit("USUARIO_ESCOLHIDO", this.usuario)
      this.$store.commit("REPOSITORIOS_DECRESCENTE", this.usuario)
      this.$router.push('usuario')
    },

  }
}
</script>

<style scoped>

.card-usuario{
  display: flex;
  margin-top: 40px;
  gap: 15px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 14px;
  cursor: pointer;
}
img {
  height: 144px;
  width: 144px;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 4px #000000);

}
h3{
  margin-top: 10px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
}

</style>
