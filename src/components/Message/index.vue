<template>
  <div></div>
</template>

<script>
import { ref, reactive, onMounted, onUpdated, onUnmounted, toRef } from 'vue';
export default {
  setup() {
    //vue2.x中的data函数
    const num = 0; //不具备响应式特性
    const cunst = ref(0); //单个属性具备响应式特性
    //多个属性具备响应式特性
    const state = reactive({
      name: '张三',
      age: 18,
    });

    //生命周期函数，vue3.0删除掉两个生命周期
    //beforeCreate -> use setup()
    //created -> use setup()
    onMounted(() => {
      console.log('mounted!');
    });
    onUpdated(() => {
      console.log('updated!');
    });
    onUnmounted(() => {
      console.log('unmounted!');
    });

    return {
      num,
      cunst,
      //因为setup本身是返回一个对象的如果有多个返回可以使用ES6的展开运算符，
      //但是reactive方法有bug对于直接把state放入return中会丢失响应式特效所以在返回之前用toRef方法包裹
      //toRef:简单来讲就是让reactive中的值每个都具有响应式特性
      ...toRef(state),
    };
  },
};
</script>

<style lang='less' scoped>
</style>