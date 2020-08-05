<template>
  <div class="fot">
    <div v-if="nan" slot="jd">
        <div v-for="(i,n) in foot" :key="n"  class="jd">
            <a v-if="n==show" @click="footImg(n,i)">
                <img :src='"@/assets/img/foot/"+i+"1"+".png"'>
            </a>
            <a v-else @click="footImg(n,i)">
                <img :src='"@/assets/img/foot/"+i+".png"'>
            </a>
        </div>
    </div>
    <div v-else slot="jx">
        <div v-for="(i,n) in jx" :key="n"  class="jx">
            <a v-if="n==show" @click="footImg(n,i)">
                <img :src='"@/assets/img/foot/"+i+"1"+".png"'>
                <p v-text="da[n]"></p>
            </a>
            <a v-else @click="footImg(n,i)">
                <img :src='"@/assets/img/foot/"+i+".png"'>
                <p v-text="da[n]"></p>
            </a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"fot",
  data(){
      return{
          foot:['home','class','jx','cart','sigin'],
          jx:['xjx','xjxf','xjxz','xjxw'],
          da:['首页','分类','直播','我的'],
          show:0,
          nan:true
      }
  },
  created(){
      this.ulr(this)
  },
  watch:{
      "$route.path":function(){
          for(let i=0;i<this.foot.length;i++){
              if(this.$route.path == '/'){
                  this.nan=true;
                  this.show = Number(false);
                  return
              }
              if("/"+this.foot[i] == this.$route.path){
                  this.nan=true;
                  this.show = i;
              }else{
                  if(i == this.foot.length){
                    return;
                  }
              }
          }
      }
  },
  methods:{
      ulr(a){
          this.foot.find(function (item,key){
            if('/'+item == a.$route.path){
                a.nan = true
                a.show = key;
            }
          })
      },
      footImg(i,a){
          var rou = this.$route.path;
          rou == '/' ? rou = '/home' : rou = this.$route.path;
          if(rou!= '/'+a){
            this.$router.push({path: a});
          }
        if(a == 'jx'){
            this.nan =false;
            this.show= Number(false)
        }else{this.show= i}
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
        .jx{
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
        .jd{
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
