<template>
  <div class="main-container">

    <img src="/img/VectorHome.png" alt="Logo GitHub">
    <Form />

  </div>
</template>

<script>
import Form from '../components/Form.vue'


export default {
  name: "HomeView",
  components: {
    Form,
  },
  data() {
    return {
      showNotice: true,
    }
  },
}

</script>

<style scoped>
.main-container {
  text-align: center;
}
</style>
