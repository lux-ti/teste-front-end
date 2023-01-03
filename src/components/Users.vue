<template>
  <main>
    <div class="container">
      <div>
        <ul>
          <li v-for="user in dataItems" :key="user.id" class="user-item">
            <div class="img-profile">
              <img :src="user.avatar_url" :alt="user.login" />
            </div>
            <div class="user-data">{{ user.login }}</div>
          </li>
        </ul>
        <div class="div-btn">
          <button @click="loadMoreDataHandler" class="btn">Ver mais</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import useGetData from "../useGetData";
import Loading from "../utilities/Loading.vue";

export default {
  name: "Users",
  components: { Loading },
  setup() {
    const { loadMoreDataHandler, dataItems, loading } = useGetData();

    return { loadMoreDataHandler, dataItems, loading };
  },
};
</script>

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

.user-item {
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
}

.user-item + .user-item {
  margin-top: 2.5rem;
}

.user-data {
  margin-left: 1rem;
}

.container {
  display: grid;
}

.div-btn {
  text-align: center;
}
</style>
