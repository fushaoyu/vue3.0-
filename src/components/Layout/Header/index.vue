<template>
  <div class="head">
    <div class="left">
      <i class="iconfont icon-calendar"></i>
      2020-09-24 星期四
    </div>
    <div class="reight">
      <div>
        <i class="iconfont icon-touxiang"></i>
        jowto_mars
      </div>
      <div @click="changePassword">
        <i class="iconfont icon-key1"></i>
        修改密码
      </div>
      <div @click="secede">
        <i class="iconfont icon-084tuichu"></i>
        退出系统
      </div>
    </div>
  </div>
</template>

<script type="ts">
import { reactive } from 'vue';
export default {
  name: 'MyHeader',
  setup() {
    const changePassword = () => {
      alert("修改密码")
    };
    const secede = () => {
      alert("退出")
    }
    return {
      changePassword,
      secede,
    };
  },
};
</script>

<style lang='less' scoped>
i {
  margin-right: 5px;
  font-size: 20px;
  color: #000;
}
.head {
  width: 100%;
  height: 65px;
  background: #008ce1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  line-height: 65px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: space-between;
  color: #ffffff;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reight {
    display: flex;
    align-items: center;
    div {
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>