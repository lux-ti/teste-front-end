<template>
  <div class="user-repos">
    <Loading v-if="loading && !listRepos.length" />
    <p v-if="error">Ocorreu um erro. Tente novamente.</p>
    <div class="content">
      <LayoutRepositories
        v-if="listRepos.length"
        :repositoriesList="listRepos"
        @loadMore="loadMoreRepos"
        :listHasFinished="listHasFinished"
        class="repos-user"
      />
      <p v-if="!totalUserRepos" class="no-repos">
        Este usuário não possui repositórios.
      </p>
    </div>
  </div>
</template>

<script>
import { GET_USER_REPOSITORIES } from "../api_links";
import useFetch from "../hooks/useFetch";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";
import Loading from "../utilities/Loading.vue";

export default {
  name: "UserRepos",
  props: ["username", "totalUserRepos"],
  data() {
    return {
      currentPage: 1,
      listRepos: [],
    };
  },
  setup() {
    const { data, loading, error, fetchData } = useFetch();
    return { data, loading, error, fetchData };
  },
  methods: {
    loadMoreRepos() {
      this.currentPage++;

      this.fetchRepos();
    },
    async fetchRepos() {
      await this.fetchData(this.urlFetch);
      this.listRepos = [...this.listRepos, ...this.data];
    },
  },

  computed: {
    urlFetch() {
      return GET_USER_REPOSITORIES(this.username, this.currentPage);
    },
    listHasFinished() {
      if (this.data) {
        if (this.listRepos.length === this.totalUserRepos) {
          return true;
        }
        return false;
      }
    },
  },
  mounted() {
    this.fetchRepos();
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
  margin-left: 4rem;
}

@media screen and (max-width: 1000px) {
  .user-repos {
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
  }
}
</style>
