<template>
    <TopBarComponent/>
    <div class="header">
        <img src="../assets/github.svg" alt="">
        <p>Repositórios favoritos</p>
    </div>
    <ListRepositories :repositories="this.$store.state.likedRepositories"/>
    
    
</template>

<script setup>
import TopBarComponent from '../components/TopBarComponent.vue';
import ListRepositories from '../components/ListRepositories.vue';
</script>

<style scoped>
    * {
        font-family: 'Inter', sans-serif;
    }

    .header {
        display: flex;
        margin-top: 15px;
        margin-left: 30px;
        margin-bottom: 42px;
    }

    .header p {
        font-size: 45px;
        margin: 0;
        font-family: 'Roboto Mono', monospace;
    }

    .header img{
        width: 50px;
        height: 50px;
    }
</style>