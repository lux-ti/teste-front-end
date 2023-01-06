<template>

  <div class="main-container">
    <ul>      
      <li v-for="user in users">
         <UserCard :name=user.login :bio=user.bio :stars=user.stars :img-url=user.avatar_url />
      </li>
    </ul>
  </div>


</template>

<script>
import UserCard from './UserCard.vue'

export default {
  name: 'UsersList',
  props:{
    query: String,
  },
  async setup(props){
    const user = props.query;
    const reqUser = await fetch(`https://api.github.com/search/users?q=${user}`);
    const data = await reqUser.json();
    console.log(data);
    return {users:data.items}    
  },
  components: {
    UserCard
  },
  //methods: {
  //async pesquisa(user) {
  //const reqUser = await fetch(`https://api.github.com/search/users?q=${user}`);
  //const data = await reqUser.json();
  //console.log(data);
  //return data.items;
//}
//}
}
</script>

<style scoped>
.main-container {
  text-align: center;
}


li {
  list-style: none;
}
</style>