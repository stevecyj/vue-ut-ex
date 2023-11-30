<script setup>
import { ref, defineEmits } from "vue";
// props list
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["delete"]);

const handleDelete = (index) => {
  emit("delete", index);
};
</script>

<template>
  <div class="undolist">
    <div class="title">
      正在進行
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" data-test="item">
        {{ item }}
        <span data-test="delete-button" @click="handleDelete(index)">-</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.undolist {
  width: 600px;
  margin: 0 auto;
}

.title {
  margin: 10px 0;
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
}

.count {
  float: right;
  display: block;
  margin-top: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  font-size: 12px;
  color: #000;
}
</style>
