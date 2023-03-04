<script>
import useFetch from "../hooks/Fetch";
import RepositoriesList from "../components/RepositoriesList.vue";
import GithubApi from "../ApiLinks";

const githubApi = new GithubApi();

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
      return githubApi.getUserReposUrl(this.username, this.currentPage);
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
  components: { RepositoriesList },
};
</script>

<template>
  <div class="user-repos">
    <p v-if="error">Ocorreu um erro. Tente novamente.</p>

    <div class="content">
      <RepositoriesList v-if="listRepos.length" :repositoriesList="listRepos" @loadMore="loadMoreRepos"
        :listHasFinished="listHasFinished" class="repos-user" />

      <p v-if="!totalUserRepos">
        Este usuário não possui repositórios.
      </p>
    </div>
  </div>
</template>

<style scoped>
.user-repos {
  display: flex;
  justify-content: center;
  width: 70%;
  margin-top: 2rem;
}

.content {
  width: 100%;
}
</style>
