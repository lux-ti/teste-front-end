<template>
  <LayoutRepositories
    :repositoriesList="repositoriesList"
    @loadMore="loadMoreRepos"
    class="repos-user"
  />
</template>

<script>
import { GET_USER_REPOSITORIES } from "../api_links";
import useFetch from "../useFetch";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";

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
  },
  mounted() {
    this.fetchUserInfos();
  },
  components: { LayoutRepositories },
};
</script>

<style scoped>
.repos-user {
  margin-left: 5rem;
  flex: 1;
}
</style>
