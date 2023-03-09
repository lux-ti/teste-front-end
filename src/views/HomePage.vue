<template>
  <div id="home">
    <img alt="github logo" src="../assets/vector.png" class="logo">
    <form action="" @submit="search($event)">
      <div id="buttons">
        <button class="btn">Repositório</button>
        <button class="btn">Usuário</button>
      </div>
      <div class="searchInput">
        <input type="text" v-model="username" placeholder="Buscar..." />
        <button class="searchButton">
          <img alt="Search Icon" src="../assets/searchIcon.svg" class="icon">
        </button>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        username: ""
      }

    },

    methods: {
      search(e){
        // const username = this.username
        e.preventDefault();
        this.$router.push({ name:`search_user`, params: { username: this.username }})
      }
    }
  }

</script>

<style scoped>
  #home {
    display: block;
    text-align: center;
  }
  .btn {
    background-color: #fff;
    color: #000000;
    border-radius: 5px;
    padding: 7px;
    width: 130px;
    margin: 10px;
    font-weight: 700;
  }
  .btn.active {
    background-color: #000000;
    color: #fff
  }

  #buttons {
    margin: 15px;
  }
  .searchInput {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 5px;
  }
  .searchInput input {
    font-size: 1.5rem;
    height: inherit;
    border: none;
  }
  .searchButton{
    background: transparent;
    border: none;
    display: flex;
  }

</style>
