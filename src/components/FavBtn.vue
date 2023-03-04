<script>
import Store from "../FavoritesStore";

export default {
    name: "FavBtn",
    props: ["repo"],
    setup() {
        const store = new Store()

        const addFav = (repoObj) => {
            store.actions.addFav(repoObj);
            console.log(store.state.favoritesRepositories)
        };

        const removeFav = (id) => {
            store.actions.removeFav(id);
        };

        return {
            store,
            addFav,
            removeFav,
        };
    },

    methods: {
        favoriteRepoHandler(repoObj) {
            const newRepo = {
                name: repoObj.name,
                description: repoObj.description,
                stargazers_count: repoObj.stargazers_count,
                id: repoObj.id,
            };
            this.addFav(newRepo);
        },
    },

    computed: {
        repoIsFavorited() {
            return this.store.state.favoritesRepositories.some(
                (repository) => repository.id === this.repo.id
            );
        },
    },
};
</script>
    
<template>
    <button class="btn-favorite" :class="repoIsFavorited ? 'favorited' : ''"
        @click="repoIsFavorited ? removeFav(repo.id) : favoriteRepoHandler(repo)"
        :title="repoIsFavorited ? 'desmarcar como favorito' : 'marcar como favorito'">

        <i class="fa-regular fa-star"></i>
    </button>
</template>


<style scoped>
.btn-favorite {
    background: none;
    border: none;
    font-size: 1.75rem;
}

.btn-favorite.favorited {
    color: #e1bb2e;
}
</style>
  