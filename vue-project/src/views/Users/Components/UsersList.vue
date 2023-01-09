<script setup lang="ts">
import commonProps from "./props/commonProps";
import { useRouter } from "vue-router";

defineProps(commonProps);

const router = useRouter();

function goToPageUser(userLogin: string) {
  router.push({ name: 'user', params: { username: userLogin } })
}

</script>

<template>
  <div class="user-list">
    <div
      v-for="(user, index) in users"
      class="card-user"
      :key="index"
      @click.prevent="goToPageUser(user.login)">
      <img :src="user.avatar_url">
      <h2>{{ user.login }}</h2>
    </div>
  </div>
</template>

<style scoped>
.user-list{
  width: 100%;
}
.card-user{
  cursor: pointer;
  display:flex;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  align-items: center;
  padding: 20px;
  margin-top: 2rem;
  font-family: sans-serif;
  border-radius: 10px;
}
.card-user img{
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 10px;
  width: 144px;
  height: 144px;
}
.card-user h2{
  font-size: 36px;
  align-self: flex-start;
  font-weight: lighter;
  border-radius: 10px;
  width: 100px;
  margin-left: 1.2rem;
}

</style>