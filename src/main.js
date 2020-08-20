import Vue from 'vue'
import app from './App.vue'
//引入mui
import './lib/css/mui.css'
//引入路由
import router from './router.js'

import { Header,Search ,Swipe, SwipeItem ,Tabbar, TabItem,Button } from 'mint-ui';

Vue.component(Header.name, Header);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name,Button)
//1导入路由
import VueRouter from 'vue-router'
//2，手动安装Vuerouter
Vue.use(VueRouter)


Vue.component(Search.name, Search);

import './lib/css/icons-extra.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.root = 'http://www.trans.com'; // 配置服务域名的URL地址
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'; // 通用的headers配置

import Axios from 'axios';

import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function (dataStr,formatString){
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    // return moment(value).format(formatString); // value可以是普通日期 20170723
    return moment.unix(dataStr).format(formatString); // 这是时间戳转时间
})


var vm=new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})