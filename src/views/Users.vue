<template>

<Suspense>
  <!-- component with nested async dependencies -->
  <UsersList :query=query />

  <!-- loading state via #fallback slot -->
  <template #fallback>
    Loading...
  </template>
</Suspense>


</template>

<script>
import UsersList from '../components/UsersList.vue'

export default {
  name: 'Users',
  props:{
    query:String,
  },
  components: {
   UsersList,
  },
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