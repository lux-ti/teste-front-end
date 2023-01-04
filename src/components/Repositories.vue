<template>
  <main>
    <div class="container">
      <LayoutRepositories
        :repositoriesList="dataItems"
        @loadMore="loadMoreDataHandler"
      />
    </div>
  </main>
</template>

<script>
import useGetData from "../useGetData";
import LayoutRepositories from "../utilities/LayoutRepositories.vue";

export default {
  name: "Repositories",
  components: { LayoutRepositories },
  setup() {
    const { loadMoreDataHandler, dataItems, loading } = useGetData();

    return { loadMoreDataHandler, dataItems, loading };
  },
};
</script>

<style scoped></style>
