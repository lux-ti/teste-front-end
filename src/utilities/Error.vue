<template>
  <p class="error-msg">
    Nenhum resultado para a busca "{{ value }}".
    <router-link to="/" class="btn">Voltar ao início.</router-link>
  </p>
</template>

<script>
export default {
  name: "Error",
  props: ["value"],
};
</script>

<style scoped>
.error-msg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
