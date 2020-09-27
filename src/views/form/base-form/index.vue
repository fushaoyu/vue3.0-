<template>
  <div>基础表单{{ num }}</div>
</template>

<script>
import { reactive, toRefs, watchEffect, ref, onMounted, onUpdated, onUnmounted,nextTick } from 'vue';
export default {
  name: 'base-form',
  setup() {
    const num = ref(0);
    onMounted(() => {
      console.log('mounted!');
    });
    onUpdated(() => {
      console.log('updated!');
    });
    onUnmounted(() => {
      console.log('unmounted!');
    });
    nextTick(() => {
      console.log('nextTick!');
    })
    return {
      num,
    };
  },
};
</script>

<style lang='less' scoped>
</style>