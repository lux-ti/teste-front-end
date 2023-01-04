<template>
  <main>
    <div class="container">
      <div>
        <ul v-if="dataItems.length !== 0">
          <UserItem
            v-for="user in dataItems"
            :key="user.id"
            :userLogin="user.login"
            :userImgUrl="user.avatar_url"
          />
        </ul>

        <Loading v-if="loading" />
        <div class="div-btn">
          <button @click="loadMoreDataHandler" class="btn">Ver mais</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import useGetData from "../useGetData";
import Loading from "../utilities/Loading.vue";
import UserItem from "./UserItem.vue";

export default {
  name: "Users",
  components: { Loading, UserItem },
  setup() {
    const { loadMoreDataHandler, dataItems, loading } = useGetData();

    return { loadMoreDataHandler, dataItems, loading };
  },
};
</script>

<style scoped>
.container {
  display: grid;
}

.div-btn {
  text-align: center;
}
</style>
