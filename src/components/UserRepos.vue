<template>
  <div class="user-repos">
    <Loading v-if="loading" />
    <p v-if="error">Ocorreu um erro. Tente novamente.</p>
    <div class="content">
      <LayoutRepositories
        v-if="data && data.length"
        :repositoriesList="repositoriesList"
        @loadMore="loadMoreRepos"
        :listHasFinished="listHasFinished"
        class="repos-user"
      />
      <p v-if="data && !data.length" class="no-repos">
        Este usuário não possui repositórios.
      </p>
    </div>
  </div>
</template>

<script>
import { GET_USER_REPOSITORIES } from "../api_links";
import useFetch from "../useFetch";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";
import Loading from "../utilities/Loading.vue";

export default {
  name: "UserRepos",
  props: ["username"],
  data() {
    return {
      currentPage: 1,
    };
  },
  setup() {
    const { data, loading, error, fetchData } = useFetch();
    return { data, loading, error, fetchData };
  },
  methods: {
    fetchUserInfos() {
      this.fetchData(GET_USER_REPOSITORIES(this.username));
    },
    loadMoreRepos() {
      this.currentPage++;
    },
  },
  computed: {
    repositoriesList() {
      if (this.data) return this.data.slice(0, this.currentPage * 3);
    },
    listHasFinished() {
      if (this.data) {
        if (this.currentPage * 3 >= this.data.length) {
          return true;
        }
      }
      return false;
    },
  },
  mounted() {
    this.fetchUserInfos();
  },
  components: { LayoutRepositories, Loading },
};
</script>

<style scoped>
.content {
  width: 100%;
}

.user-repos {
  display: grid;
  place-items: center;
  flex: 1;
  margin-left: 5rem;
}

@media screen and (max-width: 1000px) {
  .user-repos {
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
  }
}
</style>
