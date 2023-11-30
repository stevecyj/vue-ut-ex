<script setup>
import { ref, reactive } from "vue";
import Header from "@/containers/TodoList/components/Header.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
defineProps({});

let undoList = reactive([]);

const addUndoItem = (inputValue) => {
  undoList.push({ status: "div", value: inputValue });
};

const handleItemDelete = (index) => {
  undoList.splice(index, 1);
};

const changeStatus = (index) => {
  let tmpArr = [...undoList];
  tmpArr.forEach((item, i) => {
    if (i === index) {
      item.status = "input";
    } else {
      item.status = "span";
    }
  });
  undoList = tmpArr;
};

const resetStatus = () => {
  let tmpArr = [...undoList];
  tmpArr.forEach((item) => {
    item.status = "span";
  });
  undoList = tmpArr;
};

const changeItem = ({ value, index }) => {
  let tmpArr = [...undoList];
  tmpArr.forEach((item, i) => {
    if (i === index) {
      item.value = value;
    }
  });
  undoList = tmpArr;
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
