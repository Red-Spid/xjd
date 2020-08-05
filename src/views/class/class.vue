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
            <div v-for="(i,n) in rit" :key="n">
                <h1  v-text="i.c2_name"></h1>
                <img v-for="(item,index) in i.img" :key="index" :src="url+item"/>
            </div>
        </div>
    </div>
</template>
<script>
import ax from '@/network/axios'
// import Bscroll from 'better-scroll'
export default {
    name:"jdclass",
    created(){
        this.data()
        window.addEventListener('scroll', this.menu)
    },
    mounted(){
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.wrapper);
        });
    },
    // updated(){this.active(this.id-1)},
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
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(this.scroll)
        },
        active(a){
            this.$refs.wrapper.querySelectorAll("ul>li")[a].scrollIntoView({
                behavior:"smooth",  // 平滑过渡
                block:"start"  
            });
            this.t = a;
            // console.log(this.letData);
            // console.log(a);
            // console.log(this.rit);
        },
        data(){
            ax.read('get_jd_category_one').then(res=>{
                this.letData = res;
                for(let i=0;i<res.length;i++){
                    if(res[i].c1_name==this.cs){
                        this.id=res[i].c1_id
                    }
                }
            });
            ax.read('get_jd_category_two').then(res=>{
               var rit =[];
               for(let i=0;i<res.length;i++){
                   if(res[i].c1_id == this.id){
                       rit.push(res[i])
                   }
               }
               ax.read('get_jd_category_three').then(res=>{
                    for(let n=0;n<rit.length;n++){
                        rit[n].img =[];
                        for(let i=0;i<res.length;i++){
                            if(rit[n].c2_id == res[i].c2_id){
                                rit[n].img.push(res[i].c3_img)
                            }
                        }
                    }
                    this.rit =rit;
                });
            });
            ax.test().then(res=>{
                for(let i in res.jd.class1){
                   if(i == this.cs){
                        this.b=res.jd.class1[i]
                   }
               }
               console.log(this.b)
            })
        }
    }
}
</script>
<style lang="less" scoped>
@w:100%;
.hea{height:44px}
.rit{
    width:80%;float:right;height:50px;overflow: hidden;
    div{
        h1{
            line-height:24px;
        }
        img{
            width:30px;
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
    height:20rem;
    ul{
        text-align:center;
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