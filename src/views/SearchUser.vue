<template>
  <div>{{ this.total_count }} RESULTADOS</div>
  <hr>
  <div>{{ this.items }}</div>
</template>

<script>
  import GitApi from '../services/gitApi'
 
  export default {
    data() {
      return {
        total_count: 0,
        items: []
      }
    },

    mounted(){    
      GitApi.user_search(this.username).then(response => {
        const result = response.data
        this.total_count = result.total_count
        this.items = result.items
      })
      
      // GitApi.repository_search(repo).then(response => {
      //   console.log(response)
      // })
  
      // GitApi.user_details(user).then(response => {
      //   console.log(response.data)
      // })
  
      // GitApi.my_favorites(user).then(response => {
      //   console.log(response.data)
      // })
    }
  }

</script>

<style>

</style>
