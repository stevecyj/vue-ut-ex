<script setup>
import { ref, reactive } from "vue";
import Header from "@/containers/TodoList/components/Header.vue";
defineProps({});

const count = ref(0);
const undoList = reactive([]);

const addUndoItem = (inputValue) => {
  undoList.push(inputValue);
};
</script>

<template>
  <h1 class="mmm nnn">TodoList</h1>
  <Header @add="addUndoItem" />
  <ul>
    <li v-for="(item, index) in undoList" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped></style>
