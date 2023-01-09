<template>

  <Suspense>
    <!-- component with nested async dependencies -->
    <UsersList :query=query />

    <!-- loading state via #fallback slot -->
    <template #fallback>

    </template>
  </Suspense>


</template>

<script>
import UsersList from '../components/UsersList.vue'

export default {
  name: 'Users',
  props: {
    query: String,
  },
  components: {
    UsersList,
  },
}
</script>

