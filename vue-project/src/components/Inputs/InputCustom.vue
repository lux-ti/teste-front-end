<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import setup from "./setupComposable/setup";
import commonProps from "./props/commonProps";

defineProps(commonProps);
const emit = defineEmits(["update:modelValue"]);
const { onInput } = setup(emit);
</script>

<template>
    <input
      class="form-control"
      type="text"
      :value="modelValue"
      v-bind="$attrs"
      @input="onInput"
    />
</template>
