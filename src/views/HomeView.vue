<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <div :key="$route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "HomeView",
  components: {
  },
  data() {
    return {
      type: "",
      prompt: "",
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const sPrompt = {
        type: this.type,
        prompt: this.prompt,
      };
      return sPrompt
    }
  }
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
