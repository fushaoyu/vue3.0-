<template>
  <div>
    <input
      :class="dynamic"
      :type="type"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="emitValue"
      :value="modelValue"
    />
  </div>
</template>

<script>
//对于所有不带参数的 v-model，请确保分别将 prop 和 event 命名更改为 modelValue 和 update:modelValue
//详情查看https://vue-docs-next-zh-cn.netlify.app/guide/migration/v-model.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5
import { onMounted, reactive, computed, toRefs } from 'vue';
export default {
  name: 'MyComponentInput',
  props: {
    type: {
      tyep: String,
      default: () => 'text',
    },
    maxlength: {
      tyep: Number,
      default: 255,
    },
    minlength: {
      tyep: Number,
      default: 0,
    },
    placeholder: {
      tyep: String,
      default: '',
    },
    disabled: {
      tyep: Boolean,
      default: false,
    },
    size: {
      tyep: String,
      default: 'small',
    },
    modelValue: {
      tyep: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const size = props.size;
    const dynamic = computed(() => {
      let c = '';
      switch (size) {
        case 'large':
          c = 'large';
          break;
        case 'small':
          c = 'small';
          break;
        case 'mini':
          c = 'mini';
          break;
      }
      return c;
    });
    onMounted(() => {});
    const emitValue = (e) => {
      let value = e.target.value;
      emit('update:modelValue', value);
    };
    return {
      dynamic,
      emitValue,
    };
  },
};
</script>

<style lang='less' scoped>
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
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.large {
  height: 36px;
  line-height: 36px;
}
.small {
  height: 32px;
  line-height: 32px;
}
.mini {
  height: 28px;
  line-height: 28px;
}
</style>