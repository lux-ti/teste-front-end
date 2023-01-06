<template>
  <button id="pessoa">Pessoa</button>
  <!-- <button @click="pesquisa()" id="pessoa">Pessoa</button> -->
</template>

<script>
export default {
  name: 'SubmitUser',
  props: {
    entrada: {
      type: String,
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>
button {
  font-family: 'Inter';
  font-weight: 700;
  size: 20px;
  color: #000000;
  width: 186px;
  height: 51px;
  left: 518px;
  top: 379px;
  background: #FFFFFF;
  border-radius: 5px;
  border-color: #000000;
  margin-inline: 20.5px;
}
</style>