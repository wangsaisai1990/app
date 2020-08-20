<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea  placeholder="请输入要BB的内容(最多120个字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" >
                <div class="cmt-title">
                    第 1 楼&nbsp;&nbsp;用户：你好 &nbsp;&nbsp;发表时间:2020-02-02 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午 行地喝下肚
                </div>
            </div>
                <div class="cmt-item" >
                <div class="cmt-title">
                    第 1 楼&nbsp;&nbsp;用户：你好 &nbsp;&nbsp;发表时间:2020-02-02 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午 行地喝下肚
                </div>
            </div>
                <div class="cmt-item" >
                <div class="cmt-title">
                    第 1 楼&nbsp;&nbsp;用户：你好 &nbsp;&nbsp;发表时间:2020-02-02 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午 行地喝下肚
                </div>
            </div>
                <div class="cmt-item" >
                <div class="cmt-title">
                    第 1 楼&nbsp;&nbsp;用户：你好 &nbsp;&nbsp;发表时间:2020-02-02 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午 行地喝下肚
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from "mint-ui"

export default {
    data(){
        return {
            pageIndex:1,
            comments:[]
        };
    },
    methods:{
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex)
            .then(result =>{
                if(result.body.status===0){
                    this.comments=result.body.message
                }else{
                    Toast("获取评论失败!");
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size:18px;
        }
        textarea{
            font-size:14px;
            height:85px;
            margin:0;
        }
        .cmt-list{
            margin:2px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    background-color: #ccc;
                    line-height: 40px;
                }
                .cmt-body{

                }
            }
        }
    }
</style>