<template>
    <div>
        <h3>新闻列表界面</h3>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/HomeContainer/NewsInfo/'+id1">
                    <img class="mui-media-object mui-pull-left" :src="shuijiao">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="muwu">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="cbd">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="shuijiao">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="muwu">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="cbd">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="shuijiao">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="muwu">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:2020-12-12 12:12:12</span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="cbd">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{ dateTime | dateFormat}} </span>
                            <span>点击次数:1</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
      return {
        shuijiao: "../../images/shuijiao.jpg",
        muwu: "../../images/muwu.jpg",
        cbd: "../../images/cbd.jpg",
        dateTime:"1500799859",
        list:[],
        newList:[],
        id1:"1"
      }
    },

    methods:{
        getNewsList(){
            this.$http.get("api/getnewslist").then(result =>{
                if(result.body.status===0){
                    this.newslist=result.body.message;
                }
                else{

                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            .mui-media-body{
                font-size: 14px;
            }
            span{
                font-size: 10px;
            }
            
        }

        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
        }
    }
    
</style>