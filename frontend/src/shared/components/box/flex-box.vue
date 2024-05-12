<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  col?: true
  row?: true
}>()

const classes = computed(() => ({
  "flex-box": true,
  col: props.col,
  row: props.row,
}))
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex-box {
  display: flex;

  & .col {
    flex-direction: column;
  }
  & .row {
    flex-direction: row;
  }
}
</style>
