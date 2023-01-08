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

<style scoped>

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 100%;
    height: 100vh;
    background-color: rgba(125, 125, 125, 0.5);
    position: absolute;
  }

  .content-modal {
    font-family: sans-serif;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 400px;
    height: 500px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
  .content-modal img {
    width: 100px;
  }
  .content-modal h1 {
    margin-top: 3rem;
    text-align: center;
  }
  .content-modal p {
    margin-top: 3rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .content-modal button {
    margin-top: 3rem;
    text-align: center;
    background-color: #FF0000;
    border:none;
    width: 150px;
    height: 60px;
    color: #fff;
    font-size: 2rem;
    border-radius: 10px;
    cursor: pointer;
  }

</style>