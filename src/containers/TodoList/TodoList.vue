<script setup>
import { ref, reactive, computed } from "vue";
import Header from "@/containers/TodoList/components/Header.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
import { useStore } from "vuex";

const store = useStore();

defineProps({});

// let undoList = reactive([]);
const undoList = computed(() => {
  return store.getters.undoList;
});

const addUndoItem = (inputValue) => {
  store.commit("addUndoItem", inputValue);
};

const handleItemDelete = (index) => {
  store.commit("deleteItem", index);
};

const changeStatus = (index) => {
  store.commit("changeStatus", index);
};

const resetStatus = () => {
  store.commit("resetStatus");
};

const changeItem = ({ value, index }) => {
  store.commit("changeItem", { value, index });
};
</script>

<template>
  <div>
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="changeStatus"
      @reset="resetStatus"
      @changeItem="changeItem"
    />
  </div>
</template>

<style lang="scss" scoped></style>
