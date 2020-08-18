<template>
    <div>
        <sll class="fl let" @scroll="opt" ref="wrapper">
            <ul class="content">
                <li v-for="(i,index) in num" :key="index" @click='active(index)' :class="{'active':t==index}">
                    <a v-text='i.c1_name'></a>
                </li>
            </ul>
        </sll>
        <sll class="rit" ref='rit' :probeType="3">
            <div v-for="(i,n) in obj" :key="n">
                <h1 v-text="i.c2_name"></h1>
                <ul>
                    <li v-for="(item,index) in i.img" :key="index">
                        <a @click="similar(i.txt[index])">
                            <img  :src="url+item"/>
                            <p v-text='i.txt[index]'></p>
                        </a>
                    </li>
                </ul>
            </div>
        </sll>
    </div>
</template>
<script>
import sll from '@/components/center/bscroll1.vue'
export default {
    name:"jd",
    components:{
        sll
    },
    props:{
        num:{},
        obj:{type:Array},
        url:{type:String},
    },
    data(){
        return{
            t:Number(false),
        }
    },
    methods:{
        similar(a){
            this.$router.push({path:"/similar",query:{content:a,foot:false}})
        },
        opt(a){
            console.log(a);
        },
        active(a){
            if(a<=27){
                console.log(this.$refs.wrapper.$el)
                this.$refs.wrapper.$el.querySelector(".content").setAttribute("style",
                `transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                transition-duration: 0ms;
                transform: translateX(0px) translateY(-`+a*46+`px) translateZ(0px);`)
            }this.t = a;
            // console.log(this.rit);
        },
    }
}
</script>
<style lang="less" scoped>
@w:100%;
.let{
    width:20%;
    left:0;
    z-index: 1;
    position:absolute;
    background: #f8f8f8;
    margin-bottom:15%;
    overflow: hidden;
    height:83%;
    ul{
        text-align:center;
        height:38/11*99.4%;
        transition: all .5s;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        li{
            a{
                font-size:14px;
                line-height:46px;
                color:#333;
            }
        }
        .active{
            a{
                color:#e93b3d;
            }
            background:white;
        }
    }
}
.rit{
    width:80%;
    position:absolute;
    right:0;
    height:83%;
    overflow: hidden;
    div{
        width:@w;
        div{
            width:@w;
            height:100%/13;
            float:left;
            h1{
                line-height:24px;
            }
            ul{
                li{
                    height:auto;
                    a{
                        width:@w/3;
                        float:left;
                        img{
                            width:70px;
                            height:70px;
                            margin:auto 20px;
                        }
                        p{
                            text-align:center;
                        }
                    }
                }
            }
        }
    }
}
</style>