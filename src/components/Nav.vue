<template>
  <router-link>
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: "Nav",
  props: {
    text: String,
  },
};
</script>
