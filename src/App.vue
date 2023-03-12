<template>
  <div>
      <AppHome />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppHome from './components/home/AppHome'

export default defineComponent({
  name: 'App',

  components: {
    AppHome
  }
})
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}

</style>
