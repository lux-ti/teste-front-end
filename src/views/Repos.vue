<template>

  <Suspense>
    <!-- component with nested async dependencies -->
    <ReposList :query=query />
  
    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  
  
  </template>
<script>
import ReposList from '../components/ReposList.vue'

export default {
  name: 'Repos',
  props:{
    query:String,
  },
  components: {
   ReposList,
  },
}
</script>

<style scoped>
.main-container-repos {
  text-align: center;
  padding: 50px;
}

.repos-busca {
  display: flex;
  /* margin-top: 48px; */
  justify-content: flex-end;
}

li {
  list-style: none;
  border-bottom: 1px solid #000000;
}

button {
  background-color: #000000;
  background-image: url("/public/img/searchw.png") no-repeat;
  padding: 0.5rem;
  cursor: pointer;
}

input {
  background: #FFFFFF;
  border: solid #000000;
  padding: 10px;
  width: 20%;
}
</style>