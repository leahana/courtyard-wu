<!-- 无家大院主界面 -->
<template>
  <div class="container">
    <el-container>
<!-- 头部(导航栏) -->

      <el-header><MainMenu></MainMenu> </el-header>
<!-- 内容  我默认了MainShouYe 为主路径 不用动-->
      <el-main> 
        <router-view></router-view>
      </el-main>



    </el-container>
  </div>
</template>
  
  <script>
import MainMenu from './MainMenu.vue';
export default {
  data() {
    return {
      image: ["1.jpg", "2.jpg", "3.jpg"],
      carouselHeight: 460,
    };
  },
  methods: {},
  components: {
    MainMenu,
  },

};
</script>
  <!--设置样式器的样式 需要穿透 -->

  <style  lang='less'   scoped>
//   头部和脚部样式

//   主题内容样式

</style>