<template>
  <div class="el-container">
    <aside class="el-aside">
      <div class="log">
        Logo
        <!-- <img src="../../assets/images/login1.png" alt="" /> -->
      </div>
      <NavMenu></NavMenu>
    </aside>
    <div class="el-container is-vertical">
      <header class="el-header">
        <MyHeader></MyHeader>
      </header>
      <main class="el-main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script type="ts">
import { reactive } from 'vue';
import MyHeader from './Header/index.vue';
import NavMenu from './NavMenu/index.vue';
export default {
  name: 'Layout',
  components: {
    MyHeader,
    NavMenu,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  .el-aside {
    overflow: auto;
    color: #333;
    width: 200px;
    .log {
      width: 200px;
      height: 200px;
      background: pink;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .is-vertical {
    flex-direction: column;
  }
  .el-header {
    color: #333;
    flex-shrink: 0;
    min-height: 60px;
  }
  .el-main {
    display: block;
    flex: 1;
    flex-basis: auto;
    padding: 20px;
    overflow: auto;
  }
}
</style>