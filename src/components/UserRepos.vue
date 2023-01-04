<template>
  <LayoutRepositories :repositoriesList="data" class="repos-user" />
</template>

<script>
import { GET_USER_REPOSITORIES } from "../api_links";
import useFetch from "../useFetch";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";

export default {
  name: "UserRepos",
  props: ["username"],
  setup() {
    const { data, loading, error, fetchData } = useFetch();
    return { data, loading, error, fetchData };
  },
  methods: {
    fetchUserInfos() {
      this.fetchData(GET_USER_REPOSITORIES(this.username));
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
}
</style>
