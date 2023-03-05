<script>
import Store from "../FavoritesStore";

export default {
    name: "FavBtn",
    props: ["repo"],
    setup() {

        const addFav = (repoObj) => {
            Store.actions.addFav(repoObj);
            console.log(Store.getFavoritesRepositories());
        };

        const removeFav = (id) => {
            Store.actions.removeFav(id);
            console.log(Store.getFavoritesRepositories());
        };

        return {
            Store,
            addFav,
            removeFav,
        };
    },
    computed: {
        repoIsFavorited() {
            return this.Store.state.favoritesRepositories.some(
                (repository) => repository.id === this.repo.id
            );
        },
    },
};
</script>
    
<template>
    <button class="btn-favorite" 
        :class="repoIsFavorited ? 'favorited' : ''"
        @click="repoIsFavorited ? removeFav(repo.id) : addFav(repo)"
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
  