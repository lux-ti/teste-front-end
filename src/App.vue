<template>
 <div>Teste Front End</div>
</template>

<script>
  import GitApi from './services/gitApi'
  export default {
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

</style>
