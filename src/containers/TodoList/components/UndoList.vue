<script setup>
import { ref, defineEmits } from "vue";

// props list
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["delete", "status", "reset"]);

const handleDelete = (index) => {
  emit("delete", index);
};

const changeStatus = (index) => {
  emit("status", index);
};

const handleInputBlur = () => {
  emit("reset");
};
</script>

<template>
  <div class="undolist">
    <div class="title">
      正在進行
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="item"
        class="item"
        @click="changeStatus(index)"
      >
        <input
          v-if="item.status === 'input'"
          :value="item.value"
          data-test="input"
          @blur="handleInputBlur"
        />
        <span v-else data-test="span">{{ item.value }}</span>
        <span
          data-test="delete-button"
          @click="handleDelete(index)"
          class="delete"
          >-</span
        >
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

.item {
  margin-bottom: 10px;
  line-height: 32px;
  font-size: 14px;
  background: #fff;
  border-left: 5px solid #629a9a;
  border-radius: 3px;
  text-indent: 10px;
}
.delete {
  float: right;
  display: block;
  margin-top: 5px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
}

        />
        <span v-else data-test="span">{{ item.value }}</span>
        <span
          data-test="delete-button"
          @click="handleDelete(index)"
          class="delete"
          >-</span
        >
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

.item {
  margin-bottom: 10px;
  line-height: 32px;
  font-size: 14px;
  background: #fff;
  border-left: 5px solid #629a9a;
  border-radius: 3px;
  text-indent: 10px;
}
.delete {
  float: right;
  display: block;
  margin-top: 5px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  font-size: 12px;
  color: #000;
  text-indent: 0;
}
</style>
