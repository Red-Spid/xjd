<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="p">
      <p></p>
    </div>
    <router-view/>
    <fot/>
  </div>
</template>
<script>
import fot from '@/components/foot/index.vue'
export default {
  name:"app",
  components:{
    fot
  },
  mounted(){
    this.a()
  },
  methods:{
    a(){
      this.$store.commit('increment')
      // console.log(this.$store)
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
