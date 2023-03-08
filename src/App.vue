<template>
  <NavBar />
  <router-view/>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import GitApi from './services/gitApi'

  export default {
    components: { NavBar },
    
    mounted(){
      const user = 'biancaquintan'
      const repo = 'teste-front-end'
      
      GitApi.user_search(user).then(response => {
        console.log(response)
      })
      
      GitApi.repository_search(repo).then(response => {
        console.log(response)
      })

      GitApi.user_details(user).then(response => {
        console.log(response.data)
      })

      GitApi.my_favorites(user).then(response => {
        console.log(response.data)
      })
    }
  }

</script>

<style>
  * {
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
    font-family: "Inter", sans-serif;
  }
  body {
    margin: 0;
  }
</style>
