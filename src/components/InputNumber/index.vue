<template>
  <div class="container">
    <span class="el-input-number__decrease share" @click="decrease">-</span>
    <div class="el-input"><input type="text" :value="modelValue" @input="emitValue" /></div>
    <span class="el-input-number__increase share" @click="increase">+</span>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, { emit }) {
    const decrease = () => {
      if (props.modelValue == 0) {
        return;
      }
      let value = Number(props.modelValue) - 1;
      emit('update:modelValue', value);
    };
    const increase = () => {
      let value = Number(props.modelValue) + 1;
      emit('update:modelValue', value);
    };
    const emitValue = (e) => {
      let value = e.target.value;
      emit('update:modelValue', value);
    };
    return {
      decrease,
      increase,
      emitValue,
    };
  },
};
</script>

<style lang="less" scoped>
.el-input-number__decrease:hover,
.el-input-number__increase:hover {
  color: #409eff !important;
}
.container {
  position: relative;
  display: inline-block;
  width: 180px;
  line-height: 38px;
  .share {
    position: absolute;
    font-size: 22px;
    display: inline-block;
    width: 40px;
    height: auto;
    text-align: center;
    line-height: 38px;
    color: #c0c4cc;
    border-radius: 4px 0 0 4px;
    background: #f5f7fa;
    cursor: pointer;
    z-index: 1;
    top: 1px;
  }
  .el-input-number__decrease {
    border-right: 1px solid #dcdfe6;
    font-size: 30px;
    left: 1px;
  }
  .el-input-number__increase {
    border-left: 1px solid #dcdfe6;
    right: 1px;
  }
  .el-input {
    display: block;
    position: relative;
    font-size: 14px;
    width: 100%;
    input {
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 45px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>