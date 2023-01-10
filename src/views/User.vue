<template>
  <section>
    <div class="info">
      <img width="150" v-bind:src="item.avatar_url" />
      <h1><span class="material-icons">face</span> {{ item.name }}</h1>
      <h2><span class="material-icons">person</span> {{ item.login }}</h2>
      <h2>
        <span class="material-icons">location_on</span> {{ item.location }}
      </h2>
      <h2><span class="material-icons">work</span> {{ item.public_repos }}</h2>
      <h2><span class="material-icons">groups</span> {{ item.followers }}</h2>
    </div>

    <div>
      <div
        class="repositories"
        v-for="repositorio in repositorios"
        :key="repositorio.id"
      >
        <div class="container">
          <h1>
            {{ repositorio.name }}
          </h1>

          <a href="#" v-on:click.prevent="addFavoritos(index)">
            <img
              v-bind:src="
                repositorio.favorite
                  ? 'src/assets/staryellow.svg'
                  : 'src/assets/star.svg'
              "
            />
          </a>
        </div>
        <p>
          {{
            repositorio.description == null
              ? "Sem descrição"
              : repositorio.description
          }}
        </p>
        <div class="containerStar">
          <img src="/src/assets/star.svg" alt="" />
          {{ repositorio.stargazers_count }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// https://api.github.com/users/mariaccarolina
// https://api.github.com/users/mariaccarolina/repos

import axios from "axios";

export default {
  data() {
    return {
      item: [],
      repositorios: [],
      favoritos: [],
      message: "",
    };
  },
  created() {
    this.usuario();
    this.repositories();
  },
  methods: {
    usuario() {
      let name = this.$route.query.name || "maria";
      axios(`https://api.github.com/users/${name}`).then((e) => {
        this.item = e.data;
      });
    },
    repositories() {
      let name = this.$route.query.name || "maria";
      axios(`https://api.github.com/users/${name}/repos`).then((e) => {
        this.repositorios = e.data;
        console.log(this.repositorios);
      });
      // console.log('ok')
    },
    addFavoritos(index) {
      const item = this.item[index];
    
      item.favorite = !item.favorite;
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
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,900");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300,700");

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

section {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1em;
  margin: 36px 17px;
}

h1 {
  font-family: "Rubik", sans-serif;
  font-size: 36px;
  font-weight: 400;
}

h2 {
  font-size: 24px;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  color: #757575;
  display: flex;
}
.description {
  margin-top: 10px;
}

.info {
  box-shadow: 3px 3px 3px #00000055;
  padding: 20px;
  display: grid;
  gap: 10px;
  border-radius: 5px;
  height: 644px;
  align-content: flex-start;
  position: sticky;
  background-color: #d9d9d9;
}
img {
  object-fit: fill;
}
.info img {
  margin: auto;
  border-radius: 4px;
  width: 300px;
  height: 300px;
  object-fit: fill;
}

.info > h2,
.info > h4 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
}

.repositories {
  margin: 36px 73px;
  border-bottom: 1px solid;
  padding-bottom: 1rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.containerStar {
  display: flex;
  align-items: center;
  gap: 4px;
}

.containerStar img {
  margin-top: 3px;
}

.star {
  margin: 8px;
  padding-right: 10px;
  cursor: pointer;
}

.numberstars {
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 11px;
}

.to_favorite {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 800px) {
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  img {
    border-radius: 50%;
  }
  .repositories {
    margin: 10px;
    background-color: #d9d9d9;
    box-shadow: 3px 3px 3px #00000055;
  }
}
</style>
