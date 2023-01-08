<template>
  <div class="bts">
    <button>Próximo</button>
    <button>Anterior</button>
  </div>

  <h1>Resultado de busca</h1>

  <p
    v-bind:class="{ 'class-name': message }"
    v-if="message === 'Não foram encontrados resultados para a pesquisa'"
  >
    Nenhum resultado encontrado
  </p>
  <p v-else-if="message === 'Ocorreu um erro ao realizar a pesquisa'">
    Ocorreu um erro
  </p>
  <p v-else>{{ message }}</p>

  <div v-if="items.length > 0">
    <ul>
      <li v-for="item in items" :key="item.id">
        <a
          v-bind:href="
            'https://github.com/' + item.owner.login + '/' + item.name + ''
          "
          ><img width="100" v-bind:src="item.owner.avatar_url"
        /></a>
        <p>{{ item.name }}</p>
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
}

h1 {
  padding: 1em;
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1em;
  text-align: center;
  justify-content: center;
}

li {
  box-shadow: 3px 3px 10px #00000055;
  border-radius: 5px;
  flex: 150px;
  display: grid;
  max-width: 150px;
  overflow: hidden;
  transition: 0.2s;
}

li:hover {
  translate: 0 -10px;
  transition: 0.2s;
}

li img {
  width: 150px;
}

li p {
  padding: 10px;
  text-align: center;
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
