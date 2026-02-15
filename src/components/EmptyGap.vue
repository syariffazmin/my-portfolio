<template>
  <div :style="computedStyle" aria-hidden="true"></div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  base: {
    type: String,
    default: "2rem",
  },
  lg: {
    type: String,
    default: null,
  },
});

const computedStyle = computed(() => {
  return {
    "--gap-base": props.base,
    "--gap-lg": props.lg || props.base,
    width: "100%",
  };
});
</script>

<style scoped>
div {
  height: var(--gap-base);
}

@media (min-width: 992px) {
  div {
    height: var(--gap-lg);
  }
}
</style>
