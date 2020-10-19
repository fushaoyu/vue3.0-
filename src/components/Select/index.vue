<template>
  <div class="mySelect">
    <div class="el-input el-input--suffix">
      <input
        type="text"
        readonly="readonly"
        autocomplete="off"
        placeholder="请选择"
        class="el-input__inner"
        :value="value"
        @click="openPullDown"
      />
      <span class="el-input__suffix">
        <i :class="isShow ? 'iconfont icon-arrow-up-bold' : 'iconfont icon-arrow-down'"></i>
      </span>
    </div>
    <div class="PullDown" v-if="isShow">
      <div id="blue"></div>
      <ul class="el-select-dropdown el-popper">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="checkItem(item.value, item.label)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue';
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true,
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      isShow: false,
      value: '',
    });
    watchEffect(() => {
      props.options.forEach((item) => {
        if (item.value == props.modelValue) {
          state.value = item.label;
        }
      });
    });
    const openPullDown = () => {
      state.isShow = !state.isShow;
    };
    const checkItem = (value, label) => {
      state.value = label;
      state.isShow = false;
      emit('update:modelValue', value);
    };
    return {
      ...toRefs(state),
      openPullDown,
      checkItem,
    };
  },
};
</script>

<style lang='less' scoped>
.mySelect {
  width: 240px;
  display: inline-block;
  position: relative;
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    display: block;
    .el-input__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #232324;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      cursor: pointer;
    }
    .el-input__suffix {
      position: absolute;
      height: 100%;
      right: 15px;
      top: 0;
      text-align: center;
      color: #c0c4cc;
      transition: all 0.3s;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .PullDown {
    position: relative;
    .el-select-dropdown {
      z-index: 10;
      min-width: 240px;
      transform-origin: center top;
      position: absolute;
      top: 15px;
      left: 0;
      background: white;
      list-style: none;
      padding: 6px 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: 5px;
      max-height: 274px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #e4e7ed;
      overflow: auto;
      li {
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
      }
      li:hover {
        background-color: #f5f7fa;
      }
    }
  }
  #blue {
    position: relative;
    width: 0;
    height: 0;
    top: 6px;
    z-index: 1;
    left: 20px;
    border-width: 0 11px 11px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.1);
  }
  #blue:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 1px;
    left: -9px;
    border-width: 0 9px 9px;
    border-style: solid;
    border-color: transparent transparent white;
  }
}
</style>