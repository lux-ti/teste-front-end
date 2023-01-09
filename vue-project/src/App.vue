<script setup lang="ts">
import Modal from "@/components/Modal/Modal.vue";
import NavbarComponent from '@/components/NavbarComponent.vue';
import { useModal } from "@/stores/modal";

const store = useModal();

</script>

<template>
<body>
  <Modal
    v-if="store.showingModal"
  />
  <header>
    <NavbarComponent />
  </header>
  <main class="default-spacing">
    <RouterView />
  </main>
</body>
</template>
