<script lang="ts">
import FavBtn from "./FavBtn.vue";

export default {
    name: "RepositoriesList",
    props: ["repositoriesList", "FinishedList"],
    emits: ["loadMore"],
    components: { FavBtn },
};
</script>

<template>
    <div class="container">
        <ul>
            <li v-for="repo in repositoriesList" :key="repo.id" class="item-repo">
                <div>
                    <h2 class="repo-name">{{ repo.name }}</h2>
                    <p class="description" v-if="repo.description">
                        {{ repo.description }}
                    </p>
                    <span class="stars">
                        <i class="fa-regular fa-star"></i>
                        {{ repo.stargazers_count }}
                    </span>
                </div>

                <FavBtn :repo="repo" />
            </li>
        </ul>

        <div class="div-btn" v-if="!FinishedList">
            <button @click="$emit('loadMore')" class="btn">Ver mais repositórios</button>
        </div>

        <p v-if="FinishedList" class="no-more-results">Não há mais resultados</p>
    </div>
</template>

<style scoped>
.container {
    padding: 1rem 3rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item-repo {
    display: flex;
    padding: 0.75rem;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    font-size: 20px;
}

.repo-name, .description, .stars {
    padding-bottom: 1rem;
}

.div-btn {
    display: flex;
    justify-content: center;
}

.btn {
    padding: 0.25rem 1rem;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    cursor: pointer;
}
</style>
  