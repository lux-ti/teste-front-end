<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 6px solid var(--black);
  border-top-color: var(--white);
  animation: rotate 1s linear forwards infinite;
  margin: auto;
}

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
</style>
