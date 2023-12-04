<template>
  <div id="app">
 <!-- APP 根组件 用来站位 所有其他的组件会渲染到根组件中-->
 <!-- views 页面组件 是一个独立的页面 -->
 <!-- components c -->
 <!-- <p>123</p> -->
 <!-- 路由占位符 ： 其他的组件会替代 路由占位符 -->
 <!-- 可不使用 但无组件渲染 -->
     <!-- 根组件实际渲染到  public/index.html -->
    <router-view/>

    <!-- node——modules 依赖 -->
    <!-- package.json  -->
    <!-- dependencies 开发时依赖   -->
    <!-- devDependencies 运行时依赖  -->
   
  </div>
</template>



