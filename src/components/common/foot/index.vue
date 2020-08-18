<template>
  <div class="fot">
    <div class="jd">
        <div v-for='(i,index) in foot' :key="index">
            <a >
                <img :src="require('@/assets/img/foot/'+i+'.png')" alt="">
            </a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"fot",
  props:{
    pa:{
        type: String,
    }
  },
  data(){
      return{
          foot:['home','class','jx','cart','sigin'],
          jx:['xjx','xjxf','xjxz','xjxw'],
          da:['首页','分类','直播','我的'],
          show:0,
      }
  },
  created(){
      this.ulr(this)
  },
  methods:{
      ulr(a){
          console.log(a)
          this.foot.find(function (item,key){
            if('/'+item == a.$route.path){
                a.nan = true
                a.show = key;
            }
          })
          if(!a.$route.foot){
              a.disappear=true
          }else{
              a.disappear=a.$route.foot;
          }
          
      },
      footImg(i,a){
        this.$router.push({path: a});
        this.show= Number(false)
      }
  },
}
</script>
<style lang="less">
@w:100%;
.fot{
    width:@w;
    position:fixed;
    height:9.5%;
    box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    bottom:0;
    z-index:99;
    background:white;
    div{
        height:@w;
        div{
            float:left;height:100%;
        }
        
    }
    .jx{
        div{
            width:@w/4;
            a{
                display: block;
                margin:10px 0;
                text-align: center;
                img{
                    width:20%;
                }
                p{
                    margin-top:5px;
                }
            }
        }
    }
    .jd{
        div{
             width:@w/5;
            a{
                width:90%;
                height:96%;
                margin:2% auto;
                display: block;
                img{
                    width:@w;
                    height:@w;
                }
            }
        }
    }
}
</style>
