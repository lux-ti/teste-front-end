<template>
  <section class="container">
      <div>
        <div class="view">
          <div class="img">
            <img src="../images/Vector.png" alt="">
          </div>
          <div class="btn-home">
            <button @click="selecionado = true" :class="selecionado ? 'ativo' : ''">Repositório</button>
            <button  @click="selecionado = false" :class="!selecionado ? 'ativo' : ''">Usuário</button> 
          </div>
          <div class="busca">
            <input  v-on:keyup.enter="pesquisar" type="text" placeholder="Buscar..." v-model="busca"/>
          </div>
        </div>
      </div>
      <Modal v-if="modalAberto" :fecharModal="fecharModal" />
    </section>
</template>

<script>

import Modal from '../components/ModalNaoEncontrado.vue'

export default {
  name: 'home',
  components:{
    Modal
  },
  data(){
    return{
      busca: '',
      selecionado: true,
      modalAberto: false,
      pagina: 1
    }
  },
  methods:{
    pesquisar(){
      if(this.selecionado){
        this.buscarRepositorio()
      } else{
        this.buscarUsuario();
      }
    },
    buscarRepositorio(){
      let url = `https://api.github.com/search/repositories?q=${this.busca}&page=${this.pagina}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          let repositorios = r.items
           if(r.total_count){ // veirifica se o resultado do fetch deu certo ou se nao achou nenhum reposirotio
             this.$store.commit("REPOSITORIOS_RESULTADO", repositorios)
             this.$router.push('repositorios')
           } else {
             this.modalAberto = true // faz o modal aparecer
          }      
        }
      )
    },
    buscarUsuario(){
      let url = `https://api.github.com/search/users?q=${this.busca}&page=${this.pagina}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
           let usuarios = r.items
           if(r.total_count){ // veirifica se o resultado do fetch deu certo ou se nao achou nenhum usuario
            this.$store.commit("USUARIOS_RESULTADO", usuarios)
            this.$router.push('usuarios')
           } else {
            this.modalAberto = true // faz o modal aparecer
           }      
        }
      )
    },
    fecharModal(){
      this.modalAberto = false
    }
  }
}

</script>

<style scoped>
.img{
  text-align: center;
  margin-bottom: 70px;
}
.btn-home{
  text-align: center;
}
.btn-home button{
  margin: 0px 20px;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 5px;
  background: #fff;
  width: 186px;
  height: 51px;
  cursor: pointer;
}
 button.ativo{
  background: #000;
  color: white;
} 
.selecionado{
  color: red;
}
.busca{
  margin-top: 45px;
  text-align: center;
}
.busca input{
  border: 2px solid #000;
  border-radius: 5px;
  width: 780px;
  height: 70px;
  font-size: 24px;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>
