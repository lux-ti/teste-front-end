<template>
    <div class="main-container">    
    <form action="" @submit="enviarFormulario($event)">
    
        <div class="home-botao">
            <router-link to="/repositorios"><SubmitRepVue :entrada="entrada"/></router-link>
            <router-link to="/usuarios"><SubmitUserVue :entrada="entrada"/></router-link>
        </div>        
        
        <div>
            <input v-model="entrada" class="home-search" placeholder="Buscar...">
        </div>
    
    </form>
          
        </div>
    </template>
    
    <script>
    import InputTextVue from './Form/InputText.vue';
    import SubmitRepVue from './Form/SubmitRep.vue';
    import SubmitUserVue from './Form/SubmitUser.vue';
    export default {
        name: 'Form',
        components:{
            InputTextVue,
            SubmitRepVue,
            SubmitUserVue
        },
        data(){
            return{
                entrada:this.entrada,
            }
        },
        methods:{
            enviarFormulario(e){ // O 'e' está relacionado ao '$event' do form, e nos permite acessar a função preventDefault
                e.preventDefault(); //Previne que ao submeter o formulário a página seja recarregada
            }
    }}
    </script>
    
    <style scoped>
    .home-botao{
       padding-bottom: 46px;
    }
    .home-search{  
      box-sizing: border-box;
      background: #FFFFFF;
      border: 2px solid #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 1em;
      width: 55%;
    }
    .home-search::placeholder{
      font-family: 'Inter';
      color: #000000;
      font-weight: 400;
      background: url("/public/img/search.png") no-repeat;
      background-size:contain;
      background-position-x:right;
    }
    </style>