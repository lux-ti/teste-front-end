<template>
  <main>
    <div class="container">
      <Loading v-if="loading" />
      <p v-if="error">Usuário "{{ username }}" não encontrado.</p>
      <section v-if="data" class="user-data">
        <div class="div-img">
          <img :src="data.avatar_url" :alt="data.login" />
        </div>
        <h2>{{ data.name }}</h2>
        <p class="loginName">{{ data.login }}</p>

        <span aria-label="empresa atual">{{ data.company }}</span>
        <span aria-label="localização">{{ data.location }}</span>
        <span aria-label="total de repositórios públicos">{{
          data.public_repos
        }}</span>
        <span aria-label="seguidores">{{ data.followers }}</span>
      </section>
      <UserRepos v-if="data" :username="data.login" />
    </div>
  </main>
</template>

<script>
import useFetch from "../hooks/useFetch";
import { GET_USER_INFOS } from "../api_links";
import UserRepos from "../components/UserRepos.vue";
import Loading from "../utilities/Loading.vue";
import useHeadData from "../hooks/useHeadData";

export default {
  name: "UserInfos",
  props: ["username"],
  setup(props) {
    const { data, loading, error, fetchData } = useFetch();

    useHeadData(props.username, "Informações de usuário");

    return { data, loading, error, fetchData };
  },
  components: { UserRepos, Loading },
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
  align-items: flex-start;
  justify-content: center;
}
.user-data {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: var(--gray);
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.user-data h2 {
  font-weight: 300;
  font-size: 36px;
  max-width: 300px;
}

.loginName {
  font-size: 24px;
  margin-bottom: 2rem;
}

.user-data span {
  font-size: 20px;
}
.user-data span + span {
  margin-top: 1rem;
}

.user-data p,
.user-data span {
  color: var(--gray-2);
}
.div-img {
  width: 300px;
  height: 300px;
  height: auto;
}

.div-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

@media screen and (max-width: 1000px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
