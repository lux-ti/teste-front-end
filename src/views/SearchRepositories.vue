<template>
  <div class="bts">
    <button>Próximo</button>
    <button>Anterior</button>
  </div>

  <p
    v-bind:class="{ 'class-name': message }"
    v-if="message === 'Não foram encontrados resultados para a pesquisa'"
  >
    Nenhum resultado encontrado
  </p>
  <p v-else-if="message === 'Ocorreu um erro ao realizar a pesquisa'">
    Ocorreu um erro
  </p>
  

  <div class="info" v-if="items.length > 0">
    <ul>
      <li v-for="item in items" :key="item.id">
        <a
          v-bind:href="
            'https://github.com/' + item.owner.login + '/' + item.name + ''
          "
        >
          <p class="title">{{ item.name }}</p>
          <p class="description">{{ item.description }}</p>
          <div class="star_count">
          <img  src="../assets/star.svg" alt="" />{{
            item.stargazers_count
          }}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url_foto: "https://avatars.githubusercontent.com/u/95485809?v=4",
      items: [],
      message: "",
    };
  },
  created() {
    this.usuarios();
  },
  methods: {
    usuarios() {
      let name = this.$route.query.name || "maria";
      let page = this.$route.query.page || 1;

      axios(`https://api.github.com/search/repositories?q=${name}&page=${page}`)
        .then((response) => {
          if (response.data.total_count === 0) {
            // Não foram encontrados resultados para a pesquisa
            this.message = `Não foram encontrados resultados para a pesquisa "${name}"`;
          } else {
            this.items = response.data.items;
            this.message = `Resultados da pesquisa "${name}"`;
          }
        })
        .catch((error) => {
          // Algum tipo de erro ocorreu (por exemplo, falha de rede)
          this.message = "Ocorreu um erro ao realizar a pesquisa";
        });
    },
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

img{
  margin-right: 7px;
}
.title {
  font-size: 36px;
  font-weight: 400;
}

.description {
  font-size: 24px;
  font-weight: 300;
  color: #757575;
  display: flex;
  margin-top: 10px;
}

.info {
  padding: 63px;
}

.star_count {
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  padding-bottom: 22px;
  margin-bottom: 11px;
}
.bts {
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 10px;
}

.bts button {
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #2c3e50;
}
</style>
