<template>
  <div class="CheckboxContainer">
    <div v-for="(item, index) in List" :key="index">
      <input
        type="checkbox"
        name="category"
        :id="item.value"
        :value="item.value"
        @input="changeCheck"
        v-model="modelValue"
      />
      <label :for="item.value">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    List: {
      tyep: Array,
      default: () => [
        {
          label: '上海',
          value: 'sh',
        },
        {
          label: '北京',
          value: 'bj',
        },
        {
          label: '广州',
          value: 'gz',
        },
        {
          label: '深圳',
          value: 'shenzhen',
        },
        {
          label: '杭州',
          value: 'hangzhou',
        },
        {
          label: '南京',
          value: 'nanjing',
        },
        {
          label: '柬埔寨',
          value: 'jianpuzhai',
        },
      ],
    },
  },
  setup(props, { emit }) {
    //如果想让引用数据类型的值有响应式状态就需要const books = reactive([ref('Vue 3 Guide')]),下面的这种写法
    const checkList = reactive([]);
    const changeCheck = (e) => {
      let check = e.target.checked;
      let value = e.target.value;

      if (e.target.checked) {
        checkList.push(value);
      } else {
        checkList.forEach((item, index) => {
          if (value == item) {
            checkList.splice(index, 1);
          }
        });
      }
      console.log(checkList);
      emit('update:modelValue', checkList);
    };
    return { changeCheck };
  },
};
</script>

<style lang='less' scoped>
.CheckboxContainer {
  display: flex;
  align-items: center;
  div {
    margin-right: 8px;
    cursor: pointer;
    input {
      margin-right: 8px;
      cursor: pointer;
    }
    label {
      cursor: pointer;
    }
  }
}
</style>