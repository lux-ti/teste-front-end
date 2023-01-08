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
    <div class="repositories">
      <div v-for="repositorio in repositorios" :key="repositorio.id">
        <h1>{{ repositorio.name }}</h1>
        <h2 class="description">{{ repositorio.description }}</h2>
        <h2 class="numberstars">
          <img class="star" src="../assets/star.svg" alt="" />{{
            repositorio.stargazers_count
          }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      url_foto: "https://avatars.githubusercontent.com/u/95485809?v=4",
      item: [
        { avatar_url: "teste", login: "teste" },
        { avatar_url: "teste2", login: "teste2" },
      ],
      repositorios: [
        {
          id: 1,
          name: "nome do repositorio",
          description: "ok",
          stargazers_count: 1,
        },
      ],
      message: "Testando",
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
        // console.log('ok')
      });
      // console.log('ok')
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
  width: 340px;
  align-content: flex-start;
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
 margin: 70px;
}

.repositories div {
  margin: 36px 73px;
  border-bottom: 1px solid;
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
