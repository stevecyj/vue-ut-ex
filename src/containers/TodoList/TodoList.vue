<script setup>
import { ref, reactive } from "vue";
import Header from "@/containers/TodoList/components/Header.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
defineProps({});

const count = ref(0);
const undoList = reactive([]);

const addUndoItem = (inputValue) => {
  undoList.push(inputValue);
};
</script>

<template>
  <div>
    <Header @add="addUndoItem" />
    <UndoList :list="undoList" />
  </div>
</template>

<style lang="scss" scoped></style>
