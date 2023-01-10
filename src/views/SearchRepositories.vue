<template>
  <div class="bts">
    <button>Próximo</button>
    <button>Anterior</button>
  </div>

  <!-----------------------<div class="error">
    <img class="errorImg" src="../assets/image/atencao.png" alt="">
    <h1 class="titleH1">Desculpe!</h1>
  <p v-if="message === '`Não foram encontrados resultados para a pesquisa'" class="class-name">`Não foram encontrados resultados para a pesquisa</p>
  <p v-else-if="message === 'Ocorreu um erro ao realizar a pesquisa'" class="class-name">Desculpe! pagina não encontrada!</p>
  <button class="erroAviso">Certo</button>
</div> ----------------------------->

  <div class="info" v-if="items.length > 0">
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <div class="to_favorite">
          <p class="title">{{ item.name }}</p>
          <a href="#" v-on:click.prevent="addFavoritos(index)">
            <img
              v-bind:src="
                item.favorite
                  ? 'src/assets/staryellow.svg'
                  : 'src/assets/star.svg'
              "
            />
          </a>
        </div>
        <p class="description">{{ item.description }}</p>
        <div class="star_count">
          <img src="/src/assets/star.svg" alt="" />{{ item.stargazers_count }}
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
      favoritos: [],
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
          }
        })
        .catch((error) => {
          // Algum tipo de erro ocorreu (por exemplo, falha de rede)
          this.message = "Ocorreu um erro ao realizar a pesquisa";
        });
    },

    addFavoritos(index) {
      const item = this.items[index];
      console.log(item);
      item.favorite = !item.favorite;
      console.log(item.favorite);
      const favoritoIgual = this.favoritos.some((favorito) => {
        return favorito.id === item.id;
      });
      if (!favoritoIgual) {
        this.favoritos.push({
          id: item.id,
          name: item.name,
          stargazers_count: item.stargazers_count,
        });
      } else {
        const novoArray = this.favoritos.filter((favorito) => {
          if (favorito.id === item.id) {
            return false;
          }
          return favorito;
        });
        this.favoritos = novoArray;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap");

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

.erroAviso {
  background-color: #ff0000;
  width: 197px;
  height: 72px;
  color: #ffffff;
  font-size: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
}

.titleH1,
.errorImg {
  margin-bottom: 50px;
}
</style>
