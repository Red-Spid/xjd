<template>
    <div>
        <tit :url="from1" @go="chan"></tit>
        <jd :num="letData" :url="url" :obj="rit"/>
    </div>
</template>
<script>
import ax from '@/network/axios'
import tit from '@/components/tit/return.vue'
import jd from '@/components/tit/jd.vue'
// import beforNet from "@/componets/center/beforeRouteEnter.vue"
// import search from '@/components/tit/search.vue'/search
export default {
    name:"jdclass",
    components:{tit,jd},
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.from1=from.path;
      });
    },
    created(){
        this.data()
    },
    data(){
        return{
            from1:"",
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
        chan(){
            this.truth  = !this.truth;
        },
        menu(){
             console.log(this.rit,this.length)
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