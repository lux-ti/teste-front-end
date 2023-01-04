<template>
  <main>
    <div class="container">
      <section v-if="data" class="user-data">
        <div class="div-img">
          <img :src="data.avatar_url" :alt="data.login" />
        </div>
        <h2>{{ data.name }}</h2>
        <p>{{ data.login }}</p>

        <span>{{ data.company }}</span>
        <span>{{ data.location }}</span>
        <span>{{ data.public_repos }}</span>
        <span>{{ data.followers }}</span>
      </section>
      <UserRepos v-if="data" :username="data.login" />
    </div>
  </main>
</template>

<script>
import useFetch from "../useFetch";
import { GET_USER_INFOS } from "../api_links";
import UserRepos from "./UserRepos.vue";

export default {
  name: "UserInfos",
  props: ["username"],
  setup() {
    const { data, loading, error, fetchData } = useFetch();
    return { data, loading, error, fetchData };
  },
  components: { UserRepos },
  methods: {
    fetchUserInfos() {
      this.fetchData(GET_USER_INFOS(this.username));
    },
  },
  mounted() {
    this.fetchUserInfos();
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.user-data {
  max-width: 340px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: var(--gray);
  border-radius: 5px;
}
.user-data h2 {
  font-weight: 300;
}

.user-data p,
.user-data span {
  color: var(--gray-2);
}
.div-img {
  max-width: 100%;
  height: auto;
}

.div-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>
