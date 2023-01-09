<template>
  <div class="bts">
    <button>Próximo</button>
    <button>Anterior</button>
  </div>

 <!-----------------------<div class="error">
    <img class="errorImg" src="../assets/image/atencao.png" alt="">
    <h1 class="titleH1">Desculpe!</h1>
  <p v-if="message === 'Ocorreu um erro ao realizar a pesquisa'" class="class-name">Ocorreu um erro</p>
  <p v-else-if="message === 'Erro de validação'" class="class-name">Erro de validação</p>
  <p v-else class="class-name">Não foi possível encontrar o <br> repositório ou usuário desejado!</p>
  <button class="erroAviso">Certo</button>
</div> ----------------------------->

  <div class="info" v-if="items.length > 0">
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="to_favorite">
          <p class="title">{{ item.name }}</p>
          <a
            href="#"
            v-on:click.prevent="
              addFavoritos(item.id, item.name, item.stargazers_count)
            "
          >
            <img v-bind:src="estrela" />
          </a>
        </div>
        <p class="description">{{ item.description }} {{ this.favoritados }}</p>
        <div class="star_count">
          <img src="../assets/star.svg" alt="" />{{ item.stargazers_count }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      estrela: "src/assets/star.svg",
      items: [],
      message: "",
      favoritados: [],
      limit: 3,
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
    addFavoritos(id, name, stargazers_count) {
      this.estrela = "src/assets/staryellow.svg";

      const favoritoIgual = this.favoritados.some((favoritado) => {
        return favoritado.id === id;
      });
      if (!favoritoIgual) {
        this.favoritados.push({
          id: id,
          name: name,
          stargazers_count: stargazers_count,
        });
      } else {
        const novoArray = this.favoritados.filter((item) => {
          if (item.id === id) {
            return false;
          }
          return item;
        });
        this.favoritados = novoArray;
      }
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

img {
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

.to_favorite {
  display: flex;
  justify-content: space-between;
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

.error {
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 547px;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

.erroAviso{
  background-color: #FF0000;
  width: 197px;
  height: 72px;
  color: #FFFFFF;
  font-size: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
}

.titleH1, .errorImg{
  margin-bottom: 50px;
}
</style>
