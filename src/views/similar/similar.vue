<template>
    <div>
        <tit :put='ipt' :url="from1"/>
        <div>
            <div class="screen">
                <div class="fl">综合
                    <span></span>
                </div>
                <div class="fl">销量</div>
                <div class="fl">有货优先<span></span></div>
                <div class="fl">筛选</div>
            </div>
        </div>
    </div>
</template>
<script>
import tit from "@/components/tit/return.vue"
export default {
    name:'simlar',
    components:{tit},
    created(){
        this.content()
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.from1=from.path;
      });
    },
    data(){
        return{
            from1:""
        }
    },
    methods:{
        content(){
            this.ipt=this.$route.query.content
            console.log(this.$route.query.content)
        }
    }
}
</script>
<style lang="less" scope>
@w:100%;
.screen{
    width:@w;
    padding:10px 0;
    height:25px;
    display:flex;
    div{
        flex:1;
        text-align:center;
        line-height:25px;
        span{
            background:url('../../assets/img/sigin/xia.png')
        }
    }
}    
</style>