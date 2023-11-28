<script setup>
import { ref } from "vue";

defineProps({});

const count = ref(0);
</script>

<template>
  <div>
    <input type="text" data-test="input" />
  </div>
</template>

<style scoped></style>
