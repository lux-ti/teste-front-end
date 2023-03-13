<template>

  <Suspense>
    <!-- component with nested async dependencies -->
    <ReposList :query=query />

    <!-- loading state via #fallback slot -->
    <template #fallback>

    </template>
  </Suspense>


</template>
<script>
import ReposList from '../components/ReposList.vue'

export default {
  name: 'Repos',
  props: {
    query: String,
  },
  components: {
    ReposList,
  },
}
</script>

