<template>
  <div class="main-container">

    <img src="/img/VectorHome.png" alt="Logo GitHub">
    <Form />
    <!-- <Notice v-if="showNotice" :showNotice="showNotice" @aoFecharAviso="closeNotice" /> -->

  </div>
</template>

<script>
import Form from '../components/Form.vue'
//import Notice from '../components/Notice.vue'


export default {
  name: "HomeView",
  components: {
    Form,
    //Notice
  },
  data() {
    return {
      showNotice: true,
    }
  },
  //methods: {
  //closeNotice() {
  //  this.showNotice = false
  //}
  //}
}

</script>

<style scoped>
.main-container {
  text-align: center;
}
</style>
