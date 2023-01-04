<template>
  <li class="user-item">
    <router-link :to="`/user/${userLogin}`" class="user-link">
      <div class="img-profile">
        <img :src="userImgUrl" :alt="userLogin" />
      </div>
      <Loading v-if="loading && !data" />
      <div v-else-if="!loading && data" class="user-data">
        <h2 v-if="data.name">{{ data.name }}</h2>
        <p class="username">{{ userLogin }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
import { GET_USER_INFOS } from "../api_links";
import useFetch from "../useFetch";
import Loading from "../utilities/Loading.vue";

export default {
  name: "UserItem",
  props: ["userLogin", "userImgUrl"],
  setup() {
    const { data, error, loading, fetchData } = useFetch();
    return { error, data, loading, fetchData };
  },
  methods: {
    async fetchUserData() {
      await this.fetchData(GET_USER_INFOS(this.userLogin));
    },
  },
  mounted() {
    this.fetchUserData();
  },
  components: { Loading },
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
}

.user-link {
  display: flex;
}

.user-item + .user-item {
  margin-top: 2.5rem;
}

.user-data {
  margin-left: 1rem;
}

.user-data h2 {
  font-weight: 300;
  font-size: 36px;
}

.username {
  font-weight: 300;
  color: var(--gray-2);
  font-size: 24px;
  margin-top: 0.5rem;
}
</style>
