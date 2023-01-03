<template>
    <div class="main-container-repos">
      <ul>
        <li>
          <RepCard/>
        </li>
        <li>
          <RepCard/>
        </li>
        <li>
          <RepCard/>
        </li>
      </ul>
    </div>

</template>

<script>
import RepCard from '../components/RepCard.vue'

export default{
    name:'Repos',
    components:{
        RepCard,
    }
}
</script>

<style scoped>
    .main-container-repos{        
        text-align: center;
    }
   
    li{       
        list-style: none;  
        border-bottom: 1px solid #000000; ;
    }
    

</style>