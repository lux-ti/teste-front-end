<template>
  <ModalAlert v-if="showModal" :message="alertMessage" @close="closeModal" />
  <div class="main-container">
    <TopBarComponent />
    <div class="content" >
      <img class="content-img" src="../assets/github.svg" alt="">
      <div class="content-button">
        <button class="repository-button" v-bind:class="{ 'repository' : repositoryActive }" @click="repositoryButtonActivate">Repositório</button>
        <button class="user-button"
        v-bind:class="{ 'user' : userActive }" @click="userButtonActivate">Usuário</button>
      </div>
      
      <div>
        <label class="search-label">
          <input v-model="searchTerm" @keyup.enter="searchUsers" type="text" placeholder="Buscar...">
          <img @click="searchUsers" class="search-icon" src="../components/icons/search.svg" alt="">
        </label>
      </div>

    </div>
  </div>
</template>

<script setup>
  import TopBarComponent from '../components/TopBarComponent.vue';
  import ModalAlert from '../components/ModalAlert.vue';
  import githubService from '../services/github/github.service';
</script>

<script>
  export default {
    data() {
      return {
        alertMessage: '',
        showModal: false,
        repositoryActive: false,
        userActive: false,
        searchTerm: '',
        users: [],
        repositories: [],
      };
    },
    methods: {
      repositoryButtonActivate() {
        this.repositoryActive = !this.repositoryActive;
      },

      userButtonActivate() {
        this.userActive = !this.userActive;
      },

      searchUsers() {
        if(this.repositoryActive && !this.userActive) {
           githubService.getRepositoriesByName(this.searchTerm)
           .then(response => {
             this.repositories = response;

             if(response.length === 0) {
              this.alertMessage = 'Não foi possível encontrar o repositório ou usuário desejado.'
              this.showModal = true;
             } else {
               this.$router.push({ name: 'repositories', query: { q: this.searchTerm }});
             }
           })
           .catch(error => {
             console.log(error);
           });
         }

        if(this.userActive && !this.repositoryActive) {
           githubService.getUsersByUsername(this.searchTerm)
           .then(response => {
             this.users = response;

             if(response.length === 0) {
              this.alertMessage = 'Não foi possível encontrar o repositório ou usuário desejado.'
              this.showModal = true;
             } else {
               this.$router.push({ name: 'users', query: { q: this.searchTerm }});
             }
           })
           .catch(error => {
             console.log(error);
           });
          }

          if(!this.repositoryActive && !this.userActive) {
            this.alertMessage = 'Por favor, selecione se deseja buscar um repositório ou usuário.'
            this.showModal = true;
          }

          if(this.repositoryActive && this.userActive) {
            this.alertMessage = 'Por favor, selecione apenas uma opção de busca.'
            this.showModal = true;
          }
        },

        closeModal(){
          this.showModal = false;
        }

    
    },
  };
</script>

<style scoped>
 * {
  font-family: 'Inter', sans-serif;
 }
 .main-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
 }
 .content {
  display: flex;
  flex-direction: column;
  align-items: center;
 }

 .content-error-infos {
  display: flex;
  flex-direction: column;
  width: 444px;
  height: 300px;
  /* justify-content: center; */
  align-items: center;
  border-radius: 15px;
  border:  1px solid black;
  padding-top: 60px;
  color: #000;
 }

 .content-error-infos h2 {
  margin-top: 50px;
 }

 .content-error-infos p {
  width: 300px;
  text-align: center;
 }

 .content button {
  width: 186px;
  height: 51px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 46px;
  margin-left: 41px;
 }

 .repository-button {
  background-color: #fff;
  color: #000;
  cursor: pointer;
 }

 .repository {
  background-color: #000;
  color: #fff;
  cursor: pointer;
 }

 .user-button {
  background-color: #fff;
  cursor: pointer;
 }

 .user {
  background-color: #000;
  color: #fff;
  cursor: pointer;
 }
 .content-img {
  margin-top: 54px;
  margin-bottom: 72px;
  width: 169px;
  height: 169px;
 }
 .search-label {
  display: inline-block;
  position: relative;
 }

 input[type="text"] {
  width: 780px;
  height: 71px;
  padding-left: 2rem;
  font-size: 24px;
  border-radius: 10px;
 }

 .search-icon {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  cursor: pointer
 }

</style>
