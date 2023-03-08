<template>
 <div></div>
</template>

<script>
  import GitApi from '../services/gitApi'

  export default {
    data() {
      return {
        
      }
    },

    mounted(){   
      GitApi.user_details('user').then(response => {
        console.log(response.data)
      })

    }
  }
</script>

<style>

</style>
