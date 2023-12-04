<template>
    <div class='container'>
      <!-- 把main的背景图片作为展示图（合照） -->
        <el-main></el-main>
              <!-- 界面底部文字 div布局 -->
      <el-footer style="height: 100px;">
        <div
          style="
            float: left;
            width: 500px;
            text-align: center;
            border-right: 1px #ce916a dotted;
          "
        >
          <span>无家大院地址</span>
          <br />
          <span>宇宙沙 18-42</span>
        </div>

        <div
          style="
            float: left;
           width: 520px;
            text-align: center;
            border-right: 1px #ce916a dotted;
          "
        >
          <span>顾客群</span>
          <br />
          <span>QQ:</span>  
        </div>

        <div style="float: left;  text-align:center;width: 300px;">
          <span>加入我们</span>
          <br />
          <span>QQ:</span>
        </div>
      </el-footer>

      <div style="margin-top: 20px;">

        <div
          style="
            height: 500px;
            border: 1px black solid;
            width: 50%;
            float: left;
          "
        >
          <!-- 轮播图 -->
          <el-carousel
            style="width: 100%;height: 500px;"
            ref="carousel"
            arrow="always"
            :interval="3000"
            @mouseenter.native="delHandleMouseEnter"
          >

            <el-carousel-item v-for="item in image" :key="item" style="width: 100%;height: 500px;">
              <img ref="image" :src="require('@/imgs/' + item)" style="width: 100%;height: 100%;"/>
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 店员 -->
        <div
          style="
            float: right;
            border: 0px black solid;
            width: 49%;
            height: 200px;
          "
        >
          <div style="
          border: 0px black solid;
          text-align: center;font: 30px Medium;background-color: skyblue;">本周优选师傅</div>
          <!-- 店员信息 -->
          <div>
            <!-- 1号 -->
            <div class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/1.jpg"
                  alt=""
                  style="width: 100px; height: 100px"
                />
              </div>
              <div class="dianyuanxinxi">
                <span>1号信息</span>
              </div>
            </div>
            <!-- 2号 -->
            <div class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/2.jpg"
                  alt=""
                  style="width: 100px; height: 100px;"
                />
              </div>
              <div class="dianyuanxinxi">
                <span>2号信息</span>
              </div>
            </div>
            <!-- 3号 -->
            <div  class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/3.jpg"
                  alt=""
                  style="width: 100px; height: 100px;"
                />
              </div>
              <div class="dianyuanxinxi"> 
                <span>3号信息</span>
              </div>
            </div>
                        <!-- 4号 -->
                        <div  class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/4.jpg"
                  alt=""
                  style="width: 100px; height: 100px;"
                />
              </div>
              <div class="dianyuanxinxi"> 
                <span>4号信息</span>
              </div>
            </div>


          </div>
          


        </div>
            <!-- 包间 -->
            <div
          style="
            float: right;
            border: 0px black solid;
            width: 49%;
            height: 200px;
            margin-top: 0px;
          "
        >
          <div style="
          border: 0px black solid;
          text-align: center;font: 30px Medium;background-color: #C6DABA;">本周优选包间</div>
          <!-- 店员信息 -->
          <div>
            <!-- 1号 -->
            <div class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/1.jpg"
                  alt=""
                  style="width: 100px; height: 100px"
                />
              </div>
              <div class="dianyuanxinxi">
                <span>1号信息</span>
              </div>
            </div>
            <!-- 2号 -->
            <div class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/2.jpg"
                  alt=""
                  style="width: 100px; height: 100px;"
                />
              </div>
              <div class="dianyuanxinxi">
                <span>2号信息</span>
              </div>
            </div>
            <!-- 3号 -->
            <div  class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/3.jpg"
                  alt=""
                  style="width: 100px; height: 100px;"
                />
              </div>
              <div class="dianyuanxinxi"> 
                <span>3号信息</span>
              </div>
            </div>
                        <!-- 4号 -->
                        <div  class="dianyuandiv">
              <div>
                <img
                  src="@/imgs/4.jpg"
                  alt=""
                  style="width: 100px; height: 100px;"
                />
              </div>
              <div class="dianyuanxinxi"> 
                <span>4号信息</span>
              </div>
            </div>


          </div>
          


        </div>

      </div>

  
  
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        image:['1.jpg','2.jpg','3.jpg'],
      }
    },
    methods: {
  


  
    },
    components: {

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
  
    },
  }
  
  </script>
  <style scoped lang='less'>
  .el-main {
  // background-color: #E9EEF3;
  background: url("@/imgs/main.jpg") center top no-repeat;
  background-size: cover;
  color: #333;
  text-align: center;
  width: 100%;
  margin: 0px;
  // height: 550px;
  height: 750px;
}

.el-footer {
  background-color: #1a1c22;
  color: #9CCDC4;
  text-align: center;
  // height: 300px;
  line-height: 50px;
  // padding: 0px;
  font-size: 30px;
}



// 轮播图指示灯
/deep/ .el-carousel__indicator--horizontal .el-carousel__button {
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid black;
  border-radius: 50%;
  opacity: 0.5;
  right: 2%;
}
// /deep/ .el-carousel-item{
//     height: 100%;
// }

/deep/ .el-carousel__indicators {
  // 指示器
  left: unset;
  transform: unset;
  right: 5%;
}
// 轮播图左箭头
::v-deep .el-carousel__arrow--left {
  top: 478px;
  left: 560px;
  font-size: 20px;
  color: #02e9ff;
}
// 轮播图右箭头

::v-deep .el-carousel__arrow--right {
  top: 478px    ;
  right: 0px;
  font-size: 20px;
  color: #02e9ff;
}
.dianyuanxinxi{
  text-align: center;
}
.dianyuandiv{
float: left; 
margin-left: 50px
}
  </style>