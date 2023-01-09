<script setup lang="ts">
import Modal from "@/components/Modal/Modal.vue";
import NavbarComponent from './components/NavbarComponent.vue';
import { useModal } from "./stores/modal";

const store = useModal();

</script>

<template>
  <div class="body">
    <header>
      <NavbarComponent />
    </header>
    <Modal
      v-if="store.showingModal"
    />
    <RouterView />
  </div>
</template>
