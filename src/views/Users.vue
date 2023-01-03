<template>
    <div class="main-container">
      <ul>
        <li>
          <UserCard/>
        </li>
        <li>
          <UserCard/>
        </li>
        <li>
          <UserCard/>
        </li>
      </ul>
    </div>

</template>

<script>
import UserCard from '../components/UserCard.vue'

export default{
    name:'Users',
    components:{
        UserCard
    }
}
</script>

<style scoped>


    .main-container{
        text-align: center;
    }

   
    li{
        list-style: none;  
    }
    

</style>