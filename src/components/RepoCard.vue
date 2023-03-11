<template>
  <div class="repoList">
    <h2>{{ name }}</h2>
    <p>
      {{ description }}
    </p>
    <i><font-awesome-icon icon="fa-regular fa-star" />{{ star }}</i>
    <i><font-awesome-icon icon="fa-solid fa-user" />{{ userName }}</i>
    <button @click="addFavorite(repo)">
      <font-awesome-icon icon="fa-regular fa-star" :style="{color: color}"/>
    </button>
    <hr />
  </div>
</template>

<script>
import { useStore } from "../stores/store.js";
import { ref } from "vue";
let favorited = ref(false);
export default {
  name: "RepoCard",
  props: {
    name: String,
    description: String,
    star: Number,
    userName: String,
    repo: Object,
    color: String,
  },
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    addFavorite(repo) {
      const store = useStore();
      if (favorited.value === false) {
        store.$patch((state) => {
          state.favorites.push(repo);
        });
        favorited.value = true;
      } else {
        let index = store.favorites.indexOf(repo);
        store.$patch((state) => {
          state.favorites.splice(index);
        });
        favorited.value = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.repoList {
  position: relative;
  margin-right: 2%;
  margin-left: 2%;
  h2 {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    margin-bottom: 1%;
  }
  p {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #757575;
    margin-bottom: 1%;
  }
  i {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #757575;
    margin-right: 30px;
  }
  svg {
    font-size: 20px;
    color: black;
    margin-right: 10px;
  }
  button {
    position: absolute;
    right: 0%;
    top: 5%;
    background: none;
    border: none;
    cursor: pointer;
    svg {
      font-size: 30px;
    }
  }
  button :hover {
    transition: 0.2s;
    transform: scale(1.1);
  }
  hr {
    margin-top: 1%;
    color: black;
  }
}
</style>
