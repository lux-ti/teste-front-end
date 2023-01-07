<template>
  <main>
    <div class="container">
      <!-- apenas aparece o comp. "Loading" no primeiro fetch-->
      <Loading v-if="loading && !dataItems.length" />
      <Error
        v-if="!loading && data && !dataItems.length && !error"
        :value="userValue"
      />
      <p v-if="error">Ocorreu um erro. Tente novamente.</p>
      <div v-if="dataItems.length">
        <ul>
          <li v-for="user in dataItems" :key="user.id" class="user-item">
            <router-link :to="`/user/${user.login}`" class="user-link">
              <div class="img-profile">
                <img :src="user.avatar_url" :alt="user.login" />
              </div>
              <p class="username">{{ user.login }}</p>
            </router-link>
          </li>
        </ul>

        <div class="div-btn" v-if="dataItems.length && !listHasFinished">
          <button @click="loadMoreDataHandler" class="btn">Ver mais</button>
        </div>

        <p v-if="listHasFinished" class="no-more-results">
          Não há mais resultados
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import useGetData from "../hooks/useGetData";
import Error from "../utilities/Error.vue";
import Loading from "../utilities/Loading.vue";

export default {
  name: "Users",
  components: { Loading, Error },
  setup() {
    const {
      loadMoreDataHandler,
      dataItems,
      loading,
      error,
      data,
      listHasFinished,
    } = useGetData();

    return {
      loadMoreDataHandler,
      dataItems,
      loading,
      error,
      data,
      listHasFinished,
    };
  },
  computed: {
    userValue() {
      return this.$route.query.q;
    },
  },
};
</script>

<style scoped>
.div-btn {
  text-align: center;
}

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

.user-item {
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
}

.user-link {
  display: flex;
}

.user-item + .user-item {
  margin-top: 2.5rem;
}

.username {
  font-weight: 300;
  font-size: 36px;
  margin-top: 0.5rem;
  margin-left: 1rem;
}

.content {
  width: 100%;
}
.no-more-results {
  text-align: center;
  margin-top: 4rem;
}
</style>
