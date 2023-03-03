<script>
import useGetData from "../hooks/GetData";
import Error from "../components/Error.vue";

export default {
    name: "Users",
    components: { Error },
    setup() {
        const {
            loadMore,
            dataItems,
            loading,
            error,
            data,
            finishedList,
        } = useGetData();

        return {
            loadMore,
            dataItems,
            loading,
            error,
            data,
            finishedList,
        };
    },
    computed: {
        userValue() {
            return this.$route.query.q;
        },
    },
};
</script>

<template>
    <main>
        <div class="container">
            <Error v-if="data && !dataItems.length && !error" :value="userValue" />
            <p v-if="error">Ocorreu um erro. Tente novamente.</p>

            <div v-if="dataItems.length">
                <ul>
                    <li v-for="user in dataItems" :key="user.id" class="user-item">
                        <router-link :to="`/user/${user.login}`" class="user-link">
                            <div class="img-profile">
                                <img 
                                    :src="user.avatar_url" 
                                    :alt="user.login" 
                                />
                            </div>
                            <p class="username">{{ user.login }}</p>
                        </router-link>
                    </li>
                </ul>

                <div class="div-btn" v-if="dataItems.length && !finishedList">
                    <button @click="loadMore" class="btn">Ver mais</button>
                </div>

                <p v-if="finishedList" class="no-more-results">
                    Não há mais resultados
                </p>
            </div>
        </div>
    </main>
</template>
  
<style scoped>
.img-profile {
    width: 144px;
    height: 144px;
}

.img-profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: drop-shadow(0px 0px 4px #000000);
    border-radius: 5px;
}

ul {
    margin: 5rem 2rem 0 2rem;
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
}

.user-item {
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 1rem;
    margin: 2rem;
    list-style: none;
}

.user-link {
    display: flex;
}

.user-item+.user-item {
    margin-top: 2.5rem;
}

.username {
    font-weight: 300;
    font-size: 36px;
    margin-top: 0.5rem;
    margin-left: 1rem;
    color: #000;
}

.content {
    width: 100%;
}

.no-more-results {
    text-align: center;
    margin-top: 4rem;
}
</style>
  