<template>
    <div>
        <div class="hea">头部</div>
        <div class="let" ref="wrapper">
            <ul class="content">
                <li v-for="(i,index) in letData" :key="index" @click='active(index)' :class="{'active':t==index}">
                    <a v-text='i.c1_name'></a>
                </li>
            </ul>
        </div>
       <div class="rit" ref='rit'>
            <sll class="rit" ref='rit' :probeType="3">
                <div v-for="(i,n) in rit" :key="n">
                    <h1 v-text="i.c2_name"></h1>
                    <ul>
                        <li v-for="(item,index) in i.img" :key="index">
                            <a>
                                <img  :src="url+item"/>
                                <p v-text='i.txt[index]'></p>
                            </a>
                        </li>
                    </ul>
                </div>
            </sll>
        </div>
    </div>
</template>
<script>
import ax from '@/network/axios'
import Bscroll from 'better-scroll'
import sll from '@/components/center/bscroll1.vue'
export default {
    name:"jdclass",
    components:{sll},
    created(){
        this.data()
    },
    mounted(){
        this.$nextTick(() => {
            if(!this.scroll){
                this.scroll = new Bscroll(this.$refs.wrapper,{
                    click:true,
                    probeType:3,
                    scrollY:true,
                    scrollbar: true,
                    pullUpLoad:true,
                    preventDefault: false,
                    tap: true,
                    mouseWheel: true,
                    bounce: false,
                })
                this.scroll.on('scroll',(position)=>{
                    if(position.y>=1020){
                        console.log('到达')
                    }
                })
            }else{
                this.scroll.refresh();
            }
        });
    },
    data(){
        return{
            letData:{},
            url:'https://red-spid.github.io/data/img/jd/',
            rit:[],
            t:Number(false),
            cs:"京东超市",
            b:{},
        }
        // https://red-spid.github.io/data/img/jd/
        // http://106.12.85.17:8090/public/image/goods/
    },
    methods:{
        menu(){
             console.log(this.rit,this.length)
        },
        active(a){
            if(a<=27){
                this.$refs.wrapper.querySelector("ul").setAttribute("style",
                `transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                transition-duration: 0ms;
                transform: translateX(0px) translateY(-`+a*46+`px) translateZ(0px);`)
            }this.t = a;
            // console.log(this.rit);
        },
        data(){
            ax.test().then(res=>{
                this.jd=res.jd.class1
            })
            ax.all('get_jd_category_one','get_jd_category_two','get_jd_category_three').then((res)=>{
                res.forEach((val,ind)=>{
                    if(ind == 0){
                        this.letData=val;
                        Object.keys(val).forEach((key)=>{
                            if(val[key].c1_name == this.cs){
                                this.id=val[key].c1_id
                                return
                            }
                        })
                    }else if(ind == 1){
                        this.rit=[];
                        Object.keys(val).forEach((key)=>{
                            if(val[key].c1_id == this.id){
                                this.rit.push(val[key])
                            }
                        })
                    }else{
                        var rit =this.rit
                        Object.keys(rit).forEach((key)=>{
                            rit[key].img = [];
                            for(let i in val){
                                if(val[i].c2_id == rit[key].c2_id){
                                    rit[key].img.push(val[i].c3_img);
                                }
                            }
                        })
                        this.rit =rit;
                        var jd=this.jd;
                        var s=0;
                        for(let i in jd){
                            if(i == this.cs){
                                for(let n in jd[i]){
                                    this.rit[s].txt=jd[i][n]
                                    s++
                                }
                                this.length = jd[i].length;
                            }
                        }
                    }
                })
            })
        }
    }
}
</script>
<style lang="less" scoped>
@w:100%;
.hea{height:44px}
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
</style>