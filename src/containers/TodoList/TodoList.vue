<script setup>
import { ref } from "vue";
import Header from "@/containers/TodoList/components/Header.vue";
defineProps({});

const count = ref(0);
</script>

<template>
  <h1 class="mmm nnn">TodoList</h1>
  <Header />
</template>

<style scoped></style>
