<template>
  <div>
    <img src="../assets/LogoGit.png" alt="logoGit" />
    <div class="btns">
      <input
        type="radio"
        id="repo"
        value="/repositories"
        name="searchRadio"
        v-model="cat"
        @change="getCat"
      />
      <label for="repo">Repositório</label>
      <input
        type="radio"
        id="user"
        value="/users"
        name="searchRadio"
        v-model="cat"
        @change="getCat"
      />
      <label for="user">Usuário</label>
    </div>
    <div class="search">
      <input placeholder="Buscar..." id="query" v-model="prompt" />
      <router-link :to="store.cat">
        <button type="submit" value="Search" @click="getPrompt">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from "../stores/store.js";
export default {
  name: "Search",
  data() {
    return {
      cat: "",
      prompt: "",
    };
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    getPrompt() {
      const store = useStore();
      store.$patch({
        prompt: this.prompt,
      });
    },
    getCat() {
      const store = useStore();
      store.$patch({
        cat: this.cat,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
img {
  width: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
input {
  height: 71px;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 5%;
  padding: 1px;
  padding-left: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  text-align: left;
}
::placeholder {
  color: #000000;
  font-weight: 400;
}
.search {
  position: relative;
  width: 780px;
  button {
    position: absolute;
    right: -4%;
    bottom: 2.5%;
    background: none;
    border: none;
    width: 71px;
    height: 71px;
  }
  svg {
    font-size: 34px;
  }
  button :hover {
    transition: 0.1s;
    transform: scale(1.2);
    cursor: pointer;
  }
}
.btns {
  display: flex;
  width: 24%;
  input {
    display: none;
  }
  label {
    font-family: "Inter";
    width: 186px;
    height: 51px;
    background: #ffffff;
    color: #000000;
    border: black solid 2px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.btns label:hover {
  transition: 0.3s;
  background: #000000;
  color: #ffffff;
}
.btns input:checked + label {
  background: #000000;
  color: #ffffff;
}
</style>
