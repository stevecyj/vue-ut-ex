<script setup>
import { ref, defineEmits } from "vue";

defineProps({});
const inputValue = ref("");
const count = ref(0);
const emit = defineEmits(["add"]);

const addTodoItem = () => {
  // emit add event with inputValue
  if (!inputValue.value || inputValue.value == "") return;
  console.log("addTodoItem");
  emit("add", inputValue.value);
  inputValue.value = "";
};
</script>

<template>
  <div>
    <input
      type="text"
      data-test="input"
      v-model="inputValue"
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<style scoped></style>
