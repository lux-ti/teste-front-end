<script setup lang="ts">
import { useModal } from '@/stores/modal';

const store = useModal();

  function closeModal() {
    store.actionModal(false)
  }
</script>

<template>
  <div class="modal">
    <div class="content-modal">
      <img src="@/assets/img/DangerIcon.png">
      <h1>Desculpe!</h1>
      <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
      <button @click="closeModal">Certo</button>
    </div>
  </div>
</template>