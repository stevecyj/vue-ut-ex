<script setup>
// props list
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <div data-test="count">{{ list.length }}</div>
    <ul>
      <li v-for="(item, index) in list" :key="index" data-test="item">
        {{ item }}
        <span data-test="delete-button">-</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
