<script setup lang="ts">
import { onMounted, reactive, toRefs, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { typeSearch } from "@/stores/typeSearch";
import RepositoryList from "@/components/RepositoryList/index.vue";

const currentType = typeSearch();

const route = useRoute();

const data = reactive({
  user: {} as any,
  repositories: [] as any
})


onBeforeUnmount(() => {
  currentType.clearState();
})

const { user, repositories } = toRefs(data);

onMounted(async () => {
  data.user = await currentType.setCurrentUser(route.params.username)
  data.repositories = await currentType.setCurrentRepository(route.params.username)
})

</script>

<template>
  <div class="user-page" v-if="user?.login && repositories.length">
    <div class="card-user">
      <img :src="user?.avatar_url">
      <h1>{{ user?.name || 'Não Informado' }}</h1>
      <h3>{{ user?.login }}</h3>
      <ul>
        <li>
          <img class="icon" src="@/assets/img/organization.png" />
          <span>{{ user?.company || 'Não Informado' }}</span>
        </li>
        <li>
          <img class="icon" src="@/assets/img/location.png" />
          <span>{{ user?.location || 'Não Informado' }}</span>
        </li>
        <li>
          <img class="icon" src="@/assets/img/repository.png" />
          <span>{{ user?.public_repos || 'Não Informado' }}</span>
        </li>
        <li>
          <img class="icon" src="@/assets/img/followers.png" />
          <span>{{ user?.followers || 'Não Informado' }}</span>
        </li>
      </ul>
    </div>
    <div class="repository-list">
      <RepositoryList
        :repositories="repositories"
      />
    </div>
  </div>
</template>

<style scoped>
.user-page {
  display: flex;
}

.card-user {
  font-family: sans-serif;
  border-radius: 5px;
  padding: 30px;
  width: 339px;
  height: 680px;
  background-color: #D9D9D9;
}
.card-user img{
  border-radius: 5px;
  width: 300px;
  height: 300px;
}

.card-user h1{
  margin-top: 1rem;
  font-size: 36px;
}

.repository-list{
  margin-left: 70px;
  width: 100%;
}

ul {
  margin-top: 2rem;
}

ul li {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  list-style: none;
}

.icon{
  margin-right: 15px;
  width: 20px !important;
  height: 20px !important;
}

</style>