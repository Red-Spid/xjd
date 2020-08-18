<template>
    <div class="return">
        <div>
            <div class="img fl">
                <div class="jd-class fl" @click="backOff">
                    <img src="@/assets/img/sigin/return.png">
                </div>
            </div>
            <div class="ipt fl">
                <div class="bj">
                    <div class="tips fl">
                        <span></span>
                    </div>
                    <div class="go fl" @click="go">
                        <input type="text" :placeholder="put">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"return",
    props:{
        url:{
            type:String
        },
        put:{type:String}
    },
    methods:{
        go(){
            this.$router.push({path: '/search'})
        },
        backOff(){
            if(this.url != '/search'){
                this.$router.push({path: this.url,query:{foot:true}})
            }
        }
    }
}
</script>
<style lang="less" scoped>
@w:100%;
.return{
    height:44px;
    border-bottom: solid 1px #e5e5e5;
    div{
        height:@w;
        .img{
            width:40px;
            .jd-class{
                width:@w;
                img{
                    text-align: center;
                    width:20px;
                    height:20px;
                    display:block;
                    margin:12.5px auto 0 13px;
                }
            }
        }
        .ipt{
            width:80%;
            .bj{
                background:#f7f7f7;
                height:30px;
                margin:7px 0;
                border-radius:15px;
                .tips{
                    span{
                        display: block;
                        width: 18px;
                        height: 15px;
                        background:url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=) no-repeat;
                        background-position: -80px 0;
                        background-size: 200px;
                        margin: 8px 0 0 15px;
                    }
                }
                .go{
                    width:85%;
                    padding-left: 10px;
                    height:16px;
                    margin:7px 0;
                    input{
                        color:#232326;
                        font-size:12px;
                        line-height: 16px;
                        padding-left:5px;
                        width:80%;
                    }
                }
            }
        }
    }
}
</style>