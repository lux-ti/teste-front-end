<template>
  <div class="main-container">
    <ul>
      <li v-for="user in users" :key="user.id">
        <UserCard :name="user.login" :bio="user.bio" :stars="user.stars" :img-url="user.avatar_url" />
      </li>
    </ul>
    <button v-if="showButton" @click="loadMore">Ver mais</button>
  </div>
</template>

<script>
import UserCard from './UserCard.vue'

export default {
  name: 'UsersList',
  props: {
    query: String
  },
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      page: 1,
      perPage: 3,
      showButton: false
    }
  },
  async created() {
    await this.loadUsers()
  },
  methods: {
    async loadUsers() {
      const res = await fetch(`https://api.github.com/search/users?q=${this.query}&per_page=${this.perPage}&page=${this.page}`)
      const data = await res.json()

      if (data.items.length > 0) {
        this.users = [...this.users, ...data.items]
        this.showButton = true
      } else {
        this.showButton = false
      }
    },

    async loadMore() {
      this.page += 1
      await this.loadUsers()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.main-container {
  text-align: center;
}


li {
  list-style: none;
}

button {
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 74px;
}

button:hover {
  background: #000000;
  color: #FFFFFF;
}
</style>