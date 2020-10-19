<template>
  <div class="radiogroup">
    <div v-for="(item, index) in List" :key="index">
      <label :for="item.value">
        <input
          type="radio"
          :id="item.value"
          name="rdSpeed"
          :value="item.value"
          @input="changeValue"
          v-model="modelValue"
        />{{ item.label }}
      </label>
    </div>
  </div>
</template>

<script>
import { watchEffect } from 'vue';
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    List: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const changeValue = (e) => {
      let value = e.target.value;
      emit('update:modelValue', value);
    };
    return {
      changeValue,
    };
  },
};
</script>

<style lang='less' scoped>
.radiogroup {
  display: flex;
  align-items: center;
  div {
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      margin-right: 8px;
      width: 14px;
      height: 14px;
    }
  }
}
</style>