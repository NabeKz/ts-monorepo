<script setup lang="ts">
import { FlexBox } from "@/shared/components/box"
import { TextInput } from "@/shared/components/form"
import { IconGoogleFont } from "@/shared/components/icons"
import { ref } from "vue"
defineOptions({ name: "HomeView" })

const model = ref("")
</script>

<template>
  <FlexBox>
    <IconGoogleFont icon="search" />
    <TextInput id="input" v-model="model" />
  </FlexBox>
</template>
