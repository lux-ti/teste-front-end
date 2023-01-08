<template>
  <div class="bts">
    <button @click="anterior">Anterior</button>
    <button @click="proximo">Próximo</button>
  </div>

  <div class="container_search">
    <ul>
      <li v-for="item in items" :key="item.id">
        <a v-bind:href="'/user?name=' + item.login"
          ><img width="100" v-bind:src="item.avatar_url"
        /></a>
        <p>{{ item.login }}</p>
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
      items: [
        { avatar_url: "teste", login: "teste" },
        { avatar_url: "teste2", login: "teste2" },
      ],
      message: "Testando",
      name: 1,
      page: 1,
    };
  },
  created() {
    this.usuarios();
  },
  methods: {
    usuarios() {
      let name = this.$route.query.name || "maria";
      let page = this.$route.query.page || 1;

      this.page = page;
      this.name = name;

      this.refresh();
    },
    proximo() {
      this.$router.push(`/search?name=maria&page=${++this.page}`);
      this.refresh();
    },
    anterior() {
      this.$router.push(`/search?name=maria&page=${--this.page}`);
      this.refresh();
    },
    refresh() {
      axios(
        `https://api.github.com/search/users?q=${this.name}&page=${this.page}`
      ).then((e) => {
        this.items = e.data.items;
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");


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
  margin: 62px;
}

li {
  box-shadow: 0px 0px 10px 10px #0000001a;
  margin-bottom: 34px;
  border-radius: 10px;
  display: flex;
  height: 171px;
}

img {
  width: 144px;
  height: 144px;
  margin: 13px  13px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px #000000;

}
p{
  font-size: 36px;
  margin: 22px 13px;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
}

.bts {
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  position: sticky;
  top: 0px;
}

.bts button {
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #2c3e50;
}
</style>
