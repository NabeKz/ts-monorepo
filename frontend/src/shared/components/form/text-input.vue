<script setup lang="ts">
defineProps<{
  id: string
}>()

const model = defineModel<string | undefined>()
</script>

<template>
  <div class="text-input">
    <label :for="id"><slot></slot></label>
    <input type="text" :id="id" v-model="model" />
  </div>
</template>

<style scoped>
.text-input {
  display: flex;
  flex-direction: column;
}
</style>
