<script setup lang="ts">
  import NavbarComponent from './components/NavbarComponent.vue';

</script>

<template>
  <div class="body">
    <NavbarComponent />
    <RouterView />
  </div>
</template>


<style>
  * {
    margin: 0;
    padding: 0;
  }
  .body {
    display: flex;
    flex-direction: column;
  }
</style>