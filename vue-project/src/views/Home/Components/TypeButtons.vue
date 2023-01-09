<script setup lang="ts">
import { typeSearch } from "@/stores/typeSearch";

const store = typeSearch()

function changeType(value: boolean) {
  store.changeType(value)
}

</script>

<template>
  <div class="buttons">
    <button
      @click="changeType(true)"
      :class="{ 'button-inactive': !store.getCurrentType }"
    >
      Repositório
    </button>
    <button
      @click="changeType(false)"
      :class="{ 'button-inactive': store.getCurrentType }"
    >
      Usuário
    </button>
  </div>
</template>

<style scoped>
.buttons {
  margin-top: 3rem;
}
.buttons > button {
  cursor: pointer;
  margin: 10px;
  width: 186px;
  height: 51px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #000000;
  color: #fff;
}
.buttons .button-inactive {
  background-color: #fff;
  border: 1px solid black;
  color: #000;
}
</style>
