<template>
  <div>
    <form class="form-search">
      <label for="search-repo">Procure por um repositório</label>
      <input type="search" placeholder="Palavra chave" id="search-repo" />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
          />
        </svg>
      </button>
    </form>
    <ul>
      <li v-for="repo in repositoriesList" :key="repo.id" class="item-repo">
        <div>
          <h2 class="repo-name">{{ repo.name }}</h2>
          <p class="description">{{ repo.description }}</p>
          <span class="stars">{{ repo.stargazers_count }}</span>
        </div>
        <BtnFavoriteRepo :repo="repo" />
      </li>
    </ul>
    <div class="div-btn">
      <button @click="$emit('loadMore')" class="btn">Ver mais</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import store from "../storeFavorites";
import BtnFavoriteRepo from "./BtnFavoriteRepo.vue";

export default {
  emits: ["loadMore"],
  name: "LayoutRepositories",
  props: ["repositoriesList"],
  components: { BtnFavoriteRepo },
};
</script>

<style scoped>
.description {
  font-weight: 300;
  color: var(--gray-2);
  font-size: 24px;
  margin: 0.7rem 0;
}
.repo-name {
  font-weight: 400;
  font-size: 36px;
}

.item-repo {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.item-repo + .item-repo {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--black);
}
.stars {
  color: var(--gray-2);
  display: flex;
  align-items: center;
}

.stars::before {
  content: "";
  width: 24px;
  height: 24px;
  background: url("../assets/icon.svg");
  display: block;
  background-size: 24px;
  margin-right: 0.5rem;
}

.div-btn {
  text-align: center;
  border-top: 1px solid var(--black);
  margin-top: 1rem;
}

.form-search {
  max-width: 490px;
  width: 100%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  margin-bottom: 3rem;
}
.form-search label {
  position: absolute;
  visibility: hidden;
}

.form-search input {
  border: 2px solid var(--black);
  padding: 0.5rem 1rem;
  flex: 1;
}

.form-search button {
  width: 50px;
  background: var(--black);
  color: var(--white);
  padding: 0.8rem;
}
</style>
