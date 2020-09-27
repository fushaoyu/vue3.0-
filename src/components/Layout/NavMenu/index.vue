<template>
  <ul>
    <li v-for="(item, index) in routerList" :key="index" class="itemClass">
      <div
        class="container"
        :class="sign == index ? 'placeholder' : ''"
        @click="openItem(index, item.key)"
      >
        <span :style="List ? 'font-weight:400' : 'font-weight:600'"
          ><i class="iconfont icon-zuqiu"></i> {{ item.navTitle }}</span
        >
        <i
          :class="
            item.children && sign == index
              ? 'iconfont icon-arrow-down-bold'
              : 'iconfont icon-arrow-right-bold'
          "
          v-if="!List"
        ></i>
      </div>
      <transition-group name="list">
        <NavMenu
          v-if="item.children && sign == index"
          :List="item.children"
          class="subitem"
        ></NavMenu>
      </transition-group>
    </li>
  </ul>
</template>

<script type="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../../../axios/index';
export default {
  name: 'NavMenu',
  props: {
    List: Array,
  },
  setup(props, context) {
    const router = useRouter();
    const routerList = ref([]);
    const sign = ref(null);
    onMounted(() => {
      if (!props.List) {
        getMenu();
      } else {
        routerList.value = props.List;
      }
    });
    const getMenu = () => {
      const url = 'https://mock.yonyoucloud.com/mock/4706/getMenu';
      axios('post', url).then((res) => {
        routerList.value = res;
      });
    };
    const openItem = (index, path) => {
      if (path) {
        router.push(path);
      }

      sign.value = index;
    };
    return {
      routerList,
      openItem,
      sign,
    };
  },
};
</script>

<style lang='less' scoped>
.iconfont{
  font-size: 12px;
}
.itemClass {
  line-height: 35px;
  font-size: 14px;
  color: #303133;
  cursor: pointer;
  white-space: nowrap;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column;
  box-sizing: border-box;
  font-weight: 600;
  .container {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .subitem {
    width: 100%;
    .container {
      padding-left: 30px;
    }
    .placeholder {
      background: #eaf3fe;
      color: #008ce1;
      border-radius: 0;
      border-left: 4px solid #008ce1;
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>