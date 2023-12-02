<script setup>
import { ref, defineEmits, computed, nextTick } from "vue";
import { useStore } from "vuex";

const store = useStore();
defineProps({});

// const inputValue = ref("");
const inputValue = computed(() => {
  return store.getters.inputValue;
});

const emit = defineEmits(["add"]);

const changeInputValue = (value) => {
  store.commit("changeInputValue", value);
};

const addTodoItem = () => {
  // emit add event with inputValue
  if (!inputValue || inputValue == "") return;
  emit("add", inputValue);
  changeInputValue("");
};
</script>

<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        type="text"
        data-test="header-input"
        :value="inputValue"
        @input="(e) => changeInputValue(e.target.value)"
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
