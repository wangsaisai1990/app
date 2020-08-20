import Vue from 'vue'
//1导入路由
import VueRouter from 'vue-router'
//2，手动安装Vuerouter
Vue.use(VueRouter)

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

//3，创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/HomeContainer'},
        {path:'/HomeContainer',component:HomeContainer},
        {path:'/ShopcarContainer',component:ShopcarContainer},
        {path:'/MemberContainer',component:MemberContainer},
        {path:'/SearchContainer',component:SearchContainer},
        {path:'/HomeContainer/NewsList',component:NewsList},
        {path:'/HomeContainer/NewsInfo/:id',component:NewsInfo}
    ],
    linkActiveClass:'mui-active'
})

export default router;