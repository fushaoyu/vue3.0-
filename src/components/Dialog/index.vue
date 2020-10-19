<template>
  <div class="container" v-if="modelValue">
    <div class="windows">
      <div class="title">
        <div>提示</div>
        <div @click="close"><i class="iconfont icon-error"></i></div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div class="btn">
        <div class="ve-button ve-button--primary" @click="notarize">确认</div>
        <div class="ve-button" @click="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref,onMounted } from 'vue';
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit('update:modelValue', false)
    };
    const notarize = () => {
      emit('notarize');
    };
    const cancel = () => {
      emit('cancel');
    };
    return {
      close,
      notarize,
      cancel,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2020;
  display: flex;
  align-items: center;
  justify-content: center;
  .windows {
    z-index: 11;
    width: 500px;
    min-height: 150px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 20px 20px 10px;
      i {
        cursor: pointer;
      }
    }
    .content {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .btn {
      width: 100%;
      padding: 10px 20px 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .ve-button--primary {
        margin-right: 15px;
      }
    }
  }
}
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
}
</style>