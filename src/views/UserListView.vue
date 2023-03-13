<template>
  <div>
    <div class="topbar">
      <TopBarComponent/>
    </div>

    <ul>
      <li v-for="user in users.slice(0, showCount)" :key="user.id">
        <div class="userlist">
          <img class="avatar-img" :src="user.profilePictureURL" alt="Avatar">
          <router-link class="user-login" :to="{ name: 'UserRepositoriesView', params: { username: user.login } }">
            <p>{{ user.login }}</p>
          </router-link>
        </div>
      </li>
    </ul>

    <div class="showButtonBox">
        <button class="showButton" v-if="showCount < users.length" @click="showMore()" :disabled="showCount >= users.length">Ver mais</button>
    </div>

  </div>
</template>

<script setup>
import TopBarComponent from '../components/TopBarComponent.vue';
import githubService from '../services/github/github.service';
</script>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      users: [],
      showCount: 3,
    }
  },

  mounted() {
    this.searchGithubUsers()
  },
  methods: {
    async searchGithubUsers() {
      this.users = await githubService.getUsersByUsername(this.searchTerm)
      console.log(this.users)
    },

    showMore() {
        this.showCount += 4;
      }
  }
}
</script>

<style scoped>
  .topbar {
    margin-bottom: 71px;
  }
  .userlist {
    font-size: 36px;
    height: 171px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 35px;
    margin-bottom: 34px;
  }
  .avatar-img {
    width: 144px;
    height: 144px;
    margin-left: 15px;
    filter: drop-shadow(0px 0px 4px #000000);
    border-radius: 5px;
  }

  .user-login {
    margin-left: 15px;
    color: #000;
    text-decoration: none;
  }

  .user-login p:hover{
    color: #0099CC;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .showButton {
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
      font-size: 24px;
      width: 168px;
      height: 46px;
      border-radius: 10px;
      background-color: #fff;
      cursor: pointer;
  }

  .showButtonBox {
    display: flex;
    justify-content: center;
    margin-top: 74px;
  }
</style>
