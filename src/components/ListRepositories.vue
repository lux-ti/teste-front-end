<template>
    <div v-if="repositories.length">
        <ul>
            <li v-for="repository in repositories?.slice(0, showCount)" :key="repository.id">
                <div class="repositorylist">
                    <div class="repositoryListTop">
                        <h2>{{ repository.name }}</h2>
                        <img class="repositoryListImage" @click="likeRepository(repository)" v-if="!isRepositoryLiked(repository)" src="../components/icons/star.svg" alt="stars">
                        <img class="repositoryListImage" @click="likeRepository(repository)"  v-else src="../components/icons/golden-star.svg" alt="golden-star">
                    </div>

                    <p>{{ repository.description }}</p>

                    <div class="repositorylist-stars">
                        <img src="../components/icons/star.svg" alt="star">
                        <span>{{ repository.likes }}</span>
                    </div>

                    <div class="line">
                        <img src="../assets/Line.svg" alt="">
                    </div>

                </div>

            </li>
        </ul>

        <div class="showButtonBox">
            <button class="showButton" v-if="showCount < repositories.length" @click="showMore()"
                :disabled="showCount >= repositories.length">Ver mais</button>
        </div>
    </div>
    <div class="no-favourites" v-else>
        <img src="../assets/github.svg" alt="">
        <h2>Nenhum repositório favorito!</h2>
    </div>
</template>

<script setup>


</script>

<script>
export default {
    props: {
        repositories: {
            type: Array,
            required: true,
            default: () => []
        }
    },

    data(){
        return {
            showCount: 4,
        }
    },
    methods: {
        showMore() {
            this.showCount += 4;
        },

        likeRepository(repository) {
            this.$store.commit('addLikedRepository', repository);
        },

        isRepositoryLiked(repository){
            return this.$store.state.likedRepositories.filter(likedRepository => likedRepository.id === repository.id).length
        },
        
    }
}
</script>

<style scoped>
 * {
  font-family: 'Inter', sans-serif;
 }
.repositorylist {
    font-family: 'Rubik', sans-serif;
    margin-top: 27px;
    margin-left: 0px;
}

.repositoryListTop {
    display: flex;
    justify-content: space-between;

}

.repositoryListImage {
    width: 23px;
    height: 23px;
    cursor: pointer;
    margin-right: 65px;
}

.repositorylist h2 {
    font-size: 36px;
    font-weight: 400;
}

.repositorylist p,
span {
    font-size: 20px;
    font-weight: 300;
    color: #757575;
}

.repositorylist-stars {
    height: 30px;
    display: flex;
    align-items: center;
}

.repositorylist-stars span {
    margin-left: 7px;
    vertical-align: center;
}
.repositorylist-stars img {
    width: 22px;
    height: 22px;
}

.line img {
    width: 95%;
}

ul {
    list-style: none;
}

.showButton {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    font-size: 24px;
    width: 168px;
    height: 46px;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
}

.showButtonBox {
    display: flex;
    justify-content: center;
    margin-top: 74px;
    margin-bottom: 150px;
}

.no-favourites {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
}

.no-favourites img {
    width: 169px;
    height: 169px;
    margin-bottom: 20px;
}
</style>
