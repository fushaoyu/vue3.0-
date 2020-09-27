<template>
  <div>
    <div class="demo-block">
      <h3 id="ji-chu-yong-fa">Input 输入框</h3>
      <MyComponentInput v-model="inputValue"></MyComponentInput>
      <h3 id="ji-chu-yong-fa">输入的值为：{{ inputValue }}</h3>
    </div>

    <div class="demo-block">
      <h3 id="ji-chu-yong-fa">Radio 单选框</h3>
      <MyComponentRadio v-model="radioValue" :List="List"></MyComponentRadio>
      <h3 id="ji-chu-yong-fa">选择的为：{{ radioValue }}</h3>
    </div>

    <div class="demo-block">
      <h3 id="ji-chu-yong-fa">Checkbox 多选框</h3>
      <MyComponentCheckbox v-model="CheckboxValue"></MyComponentCheckbox>
      <h3 id="ji-chu-yong-fa">选择的为：{{ CheckboxValue.join(',') }}</h3>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue';
export default {
  name: 'baseSubassembly',
  setup() {
    const List = [
      {
        label: '上海',
        value: 'shanghai',
      },
      {
        label: '北京',
        value: 'beijin',
      },
      {
        label: '广州',
        value: 'guangzhou',
      },
    ];
    const state = reactive({
      inputValue: '', //输入框的值
      radioValue: '', //单选框的值
      CheckboxValue: [], //多选框的值
    });
    watchEffect(() => {
      console.log(state.CheckboxValue);
    });
    return {
      ...toRefs(state),
      List,
    };
  },
};
</script>

<style lang='less' scoped>
#ji-chu-yong-fa {
  color: #1f2f3d;
  margin: 20px 0 20px;
}
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-bottom: 24px;
  box-sizing: border-box;
  padding: 0 20px;
}
</style>