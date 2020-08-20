<template>
    <div id="info" class="newsinfo-content">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content"></div>
        <ul>
            <li v-for="(item,index) in list" v-bind:key="index">
                {{item.title}}
            </li>
        </ul>
        <comment-box>
            
        </comment-box>
    </div>

</template>

<script>
import Axios from 'axios';
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            list:[],
            id:this.$route.params.id
        }
    },

    created(){
        this.getData()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result =>{
                if(result.body.status===0){
                    this.newsinfo=result.body.message[0];
                }else{
                    Toast('获取新闻失败！')
                }
            })
        },
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
    },
    components:{
        "comment-box":comment
    }
}
</script>
<style lang="scss" scoped>

    .newsinfo-content{
        //左右
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align:center;
            margin:15px;
            color:red;
        }
        .subtitle{
            font-size: 13px;
            color:royalblue;
            display: flex;
            justify-content: space-between;
        }
        .content{

        }
    }

</style>