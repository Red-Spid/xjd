<template>
  <div id="app">
    <!--
      <div class="p"><p></p></div>
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <fot :pa="nan"/>
  </div>
</template>
<script>
import fot from '@/components/common/foot/index.vue'
export default {
  name:"app",
  components:{fot},
  mounted(){
    this.a()
  },
  data(){
    return{
      nan:''
    }
  },
  methods:{
    a(){
      this.$store.commit('increment')
      this.nan=this.$store.state.args.url
    }
  }
}
</script>
<style lang="less">
@import url('./assets/css/clear.css');
.p{
  p{
    background:url('./assets/img/sigin/browserslistrc.jpg') repeat-x;
    height:20px;
  }
}
#app{width:100%;height:auto}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
