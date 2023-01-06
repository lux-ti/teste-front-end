<template>
  <div>
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
    <div class="div-btn" v-if="!listHasFinished">
      <button @click="$emit('loadMore')" class="btn">Ver mais</button>
    </div>
  </div>
</template>

<script>
import BtnFavoriteRepo from "./BtnFavoriteRepo.vue";

export default {
  emits: ["loadMore"],
  name: "LayoutRepositories",
  props: ["repositoriesList", "listHasFinished"],
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
</style>
