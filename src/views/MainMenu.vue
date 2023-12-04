<!-- 导航栏界面 -->

<template>
  <div class='container'>
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b" router>

      <!-- 把index=跳转路径 直接/路径  就行 我默认了主路径 -->
      <!-- logo -->
      <el-menu-item >
        <img src="@/imgs/wulogo169.png" alt="" class="menu-logo">
      </el-menu-item>
      <el-menu-item index="/mainshouye">简介</el-menu-item>

      <el-submenu index="2">
        <template slot="title">人员</template>
        <el-menu-item index="/kazi">KAZI</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="3">房间</el-menu-item>
      <el-menu-item index="4">摄影棚</el-menu-item>
      <el-menu-item index="5">留言</el-menu-item>
      <el-menu-item index="6">

      </el-menu-item>
      <el-button type="text" @click="open">加入我们</el-button>

    </el-menu>

  </div>
</template>
<script>

export default {
  data() {
    return {
      baseURL: "https://qm.qq.com/cgi-bin/qm/qr?k=cG5iCHMzJWZeGVZB65q6bLUI4lE72TVE&jump_from=webapi&authKey=rst9bh4absksHCFl0gD86HrEMxETOFtdcfs4mGd8Yqu0Bjc/Fhif38rMMgE0Xb3F",
      activexitongshouye: "/mainshouye",

    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },

    open() {
      // this.$alert('联系方式:qqxxxxxxxx', '标题名称', {
      //   confirmButtonText: '好的，我知道了'
      // });

      window.location.href=this.baseURL
    }



  },
  components: {
    // Maincarousel,
  },
  mounted() {

  },
  computed: {


  },
  filters: {

  },
  watch: {

  },
  created() {
    this.activexitongshouye = "/maininterface/maincarousel"
  },
}

</script>
<style scoped lang='less'>
.container {
  // 更亮和更具吸引力的颜色
  background-color: #2c4b7b;

  .el-menu {
    border: none; // 去除边框以获得更干净的外观

    .el-menu-item,
    .el-submenu__title {
      font-weight: bold; // 加粗字体以增强可读性

      &:hover {
        background-color: #e6a23c; // 悬停时的背景颜色
      }
    }
  }


}

.el-menu-demo.el-menu {
  background-color: aqua;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 650px;
}

.menu-logo {
  width: 180px;
  /* 或根据需要调整 */
  height: 60px;
  /* 保持原始宽高比 */
  vertical-align: left;
  /* 垂直居中 */
}

@media (max-width: 600px) {
  .menu-logo {
    width: 50px;
    /* 小屏幕尺寸调整 */
  }
}
</style>