<script setup lang="ts">
import Modal from "@/components/Modal/Modal.vue";
import NavbarComponent from './components/NavbarComponent.vue';
import { useModal } from "./stores/modal";

const store = useModal();

</script>

<template>
  <div class="body">
    <Modal
      v-if="store.showingModal"
    />
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