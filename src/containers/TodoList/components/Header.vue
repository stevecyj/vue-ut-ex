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
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        type="text"
        data-test="input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        placeholder="Please input your todo item !"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  line-height: 60px;
  background: #333;
  color: #fff;
  font-size: 24px;

  &-content {
    width: 600px;
    margin: 0 auto;
  }
  &-input {
    float: right;
    width: 360px;
    margin-top: 16px;
    line-height: 24px;
    outline: none;
    color: #333;
    text-indent: 10px;
  }
}
</style>
