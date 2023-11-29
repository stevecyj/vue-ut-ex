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
  console.log(index);
  emit("delete", index);
};
</script>

<template>
  <div>
    <div data-test="count" class="count">{{ list.length }}</div>
    <ul>
      <li v-for="(item, index) in list" :key="index" data-test="item">
        {{ item }}
        <span data-test="delete-button" @click="handleDelete(index)">-</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
