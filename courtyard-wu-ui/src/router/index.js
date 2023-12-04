import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// 无家大院首页
import Main from '../views/Main.vue'
// 导航栏
import MainMenu  from'../views/MainMenu'
// 首页中展示的内容
import MainShouYe  from'../views/MainShouYe'
// 人员中的kazi的页面
import KaZi  from'../views/DianYuan/kazi'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WuJiaMain',
    component: Main,
    redirect:{name:'系统首页'},
    // 子路径 剩下的界面路径写入这里就行
    children:[
      {path:'mainshouye',name:'系统首页',component:MainShouYe, meta: { title: "系统首页" }},
      {path:'kazi',name:'KaZi',component:KaZi, meta: { title: "KaZi" }},

    ]
  },
  {
    path:'/mainmenu',
    name:'mainmenu',
    component:MainMenu ,
  },
  // {
  //   path:'/mainshouye',
  //   name:'mainshouye',
  //   component:MainShouYe ,
  // },
]

const router = new VueRouter({
  routes
})

export default router
