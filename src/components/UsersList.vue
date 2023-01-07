<template>

  <div class="main-container">
    <ul>      
      <li v-for="user in users">
         <UserCard :name=user.login :bio=user.bio :stars=user.stars :img-url=user.avatar_url />
      </li>
    </ul>
    <button @click="exibemais()" id="pessoa">Ver mais</button>
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
    const reqUser = await fetch(`https://api.github.com/search/users?q=${user}&per_page=3`);
    const data = await reqUser.json();
    console.log(data);
    return {users:data.items}    
  },
  components: {
    UserCard
  },
  methods:{
    exibemais(){
      console.log("fui clicado"); 
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

button{
  background: #FFFFFF;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-family: 'Rubik';
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  transition: 0.5s;
}

button:hover{
  background: #000000;
  color:#FFFFFF;
}
</style>