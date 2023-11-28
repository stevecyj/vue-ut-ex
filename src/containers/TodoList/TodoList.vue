<script setup>
import { ref, reactive } from "vue";
import Header from "@/containers/TodoList/components/Header.vue";
defineProps({});

const count = ref(0);
const undoList = reactive([]);
</script>

<template>
  <h1 class="mmm nnn">TodoList</h1>
  <Header />
</template>

<style scoped></style>
