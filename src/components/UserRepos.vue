<template>user repos</template>

<script>
import { GET_USER_REPOSITORIES } from "../api_links";
import useFetch from "../useFetch";

export default {
  name: "UserRepos",
  props: ["username"],
  setup() {
    const { data, loading, error, fetchData } = useFetch();
    return { data, loading, error, fetchData };
  },
  methods: {
    async fetchUserInfos() {
      await this.fetchData(GET_USER_REPOSITORIES(this.username));
      console.log(this.data);
    },
  },
  mounted() {
    this.fetchUserInfos();
  },
};
</script>

<style></style>
