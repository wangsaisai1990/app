<template>
    <div>
        <mt-swipe :auto="1000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/HomeContainer/NewsList"> 
                    <img class="mui-media-object mui-pull-left" :src="url1">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="mui-media-object mui-pull-left" :src="url2">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="mui-media-object mui-pull-left" :src="url3">
                    <div class="mui-media-body">商品购买</div></a></li>

            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="mui-media-object mui-pull-left" :src="url4">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="mui-media-object mui-pull-left" :src="url5">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img class="mui-media-object mui-pull-left" :src="url6">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>

        <h3>HomeContainer</h3>
    </div>
</template>


<script>
//    export default {
//     name: "Info",
//     data() {
//       return {
//         list: []
//       }
//     },
//     methods: {
//       getData: function () {
//         let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
//         //此处推荐使用箭头函数。
//         this.$http.get(api).then((res)=>{
//           this.list = res.body.result;
//         }, (err)=>{
//           console.log(err);
//         });
//       }
//     },
//     mounted() {
//       this.getData();
//     }
//   }
//Axios方式
 import Axios from 'axios';

  export default {
    name: "app",
    data() {
      return {
        url1: "../../images/menu1.png",
        url2: "../../images/menu2.png",
        url3: "../../images/menu3.png",
        url4: "../../images/menu4.png",
        url5: "../../images/menu5.png",
        url6: "../../images/menu6.png",

        list:[]
      }
    },
    methods:{
      getData(){
        //请求数据
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        Axios.get(api).then((response)=> {
          console.log(response);
          this.list = response.data.result;
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height:200px;
    }

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }

        &:nth-child(2) {
            background-color: blue;
        }
        &:nth-child(3) {
            background-color: green;
        }
    }


    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border:none;
        img {
            height:60px;
            width:60px;
        }
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 10px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none
    }

</style>