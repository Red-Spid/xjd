<template>
    <div>
        <tit :put='ipt' :url="from1"/>
        111111111111111111simlar
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
    
</style>