<template>

    <Suspense>
        <!-- component with nested async dependencies -->
        <UserSelec :query=query />

        <!-- loading state via #fallback slot -->
        <template #fallback>

        </template>
    </Suspense>


</template>
<script>
import UserSelec from './UserSelec.vue'

export default {
    name: 'UserProfile',
    props: {
        query: String,
    },
    components: {
        UserSelec,
    },
}
</script>
