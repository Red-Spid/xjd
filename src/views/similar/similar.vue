<template>
    <div>
        <tit :put='ipt' :url="from1"/>
        <div class="letNan">
            <div class="screen">
                <div class="fl">
                    <span>综合<i></i></span>
                </div>
                <div class="fl">销量</div>
                <div class="fl">
                    <span>有货优先<i></i></span>
                </div>
                <div class="fl">筛选</div>
            </div>
            <div class="transverse">
                <div v-for="(i,n) in classAll" :key="n">
                    <p>{{i.key}}</p>
                    <span v-if="i.triangle"></span>
                </div>
            </div>
            <img src="@/assets/img/details/img_1.png" alt="">
        </div>
    </div>
</template>
<script>
import tit from "@/components/tit/return.vue"
import ax from "@/network/axios"
export default {
    name:'simlar',
    components:{tit},
    created(){
        this.sed111()
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.from1=from.path;
      });
    },
    data(){
        return{
            from1:"",
            classAll:[
                {key:'京东物流',triangle:false},
                {key:'新品',triangle:false},
                {key:'品牌',triangle:true},
                {key:'包装',triangle:true},
                {key:'香型',triangle:true},
                {key:'片数',triangle:true},
                {key:'国产进口',triangle:true},
                {key:'原料成分',triangle:true},
            ],
        }
    },
    methods:{
        sed111(){
            this.ipt=this.$route.query.content
            console.log(this.$route.query.content)
            console.log(ax.read('get_details-1'));
        }
    },
}
</script>
<style lang="less" scope>
@w:100%;@active:#ff4142;
.letNan{width:@w;overflow: hidden;}
.transverse{
    // padding:2.5%;
    width:200%;
    display:flex;
    padding:5px;
    div{
        flex:1;
        width:8%;
        margin-right:1%;
        background: #f2f2f7;
        text-align:center;
        position:relative;
        p{
            // padding:5px 0;
            line-height:30px;
        }
        span{
            position: absolute;
            right:13px;top:40%;z-index:1;
            width:10px;
            height:30px;
            display:block;
            float:left;
            background:url(../../assets/img/la.png)no-repeat;
            background-size:100%;
        }
    }
}
.screen{
    width:@w;
    padding:10px 0;
    height:25px;
    display:flex;
    border-bottom:solid 1px #e5e5e5;
    div{
        flex:1;
        text-align:center;
        line-height:25px;
        position:relative;
        span{
            position:relative;
            color:#333;
            i{
                width:10px;
                height:10px;
                position:absolute;
                background:url('../../assets/img/sigin/xia.png')no-repeat;
                background-size:100%;
                top:7px;
                right:-15px;
            }
        }
    }
}
</style>