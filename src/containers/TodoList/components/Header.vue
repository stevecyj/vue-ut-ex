<script setup>
import { ref } from "vue";

defineProps({});
const inputValue = ref("");

const count = ref(0);
</script>

<template>
  <div>
    <input type="text" data-test="input" v-model="inputValue" />
  </div>
</template>

<style scoped></style>
