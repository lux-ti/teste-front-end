<script setup lang="ts">
import { reactive, toRefs, watch } from "vue";

const data = reactive({
  currentType: true as boolean,
});

const { currentType } = toRefs(data);

const emit = defineEmits(["changeType"]);

watch(currentType, (current) => {
  emit("changeType", current);
});
</script>

<template>
  <div class="buttons">
    <button
      @click="currentType = true"
      :class="{ 'button-inactive': !currentType }"
    >
      Repositório
    </button>
    <button
      @click="currentType = false"
      :class="{ 'button-inactive': currentType }"
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
  width: 150px;
  height: 40px;
  font-weight: bold;
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
