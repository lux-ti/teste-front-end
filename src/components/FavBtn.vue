<script>
import Store from "../FavoritesStore";
const store = new Store()

export default {
    name: "FavBtn",
    props: ["repo"],
    setup() {
        const addFavorite = (repoObj) => {
            const newRepo = {
                id: repoObj.id,
                name: repoObj.name,
                description: repoObj.description,
                stargazers_count: repoObj.stargazers_count,
            };
            store.actions.addFav(newRepo);
            console.log(store.state.favoritesRepositories);
        }

        const addFav = (repoObj) => {
            store.actions.addFav(repoObj);
        };

        const removeFav = (id) => {
            store.actions.removeFav(id);
            console.log(store.getFavoritesRepositories());
        };

        return {
            store,
            addFav,
            removeFav,
            addFavorite,
        };
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
        @click="repoIsFavorited ? removeFav(repo.id) : addFavorite(repo)"
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
  