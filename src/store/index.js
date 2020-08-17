import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment () {
      var args = {};
      var query = location.search.substring(1);
      var pairs = query.split('&');
      for(let i = 0; i < pairs.length; i++){
        var pos = pairs[i].indexOf('=');
        if(pos === -1)  continue;
        var name = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;
      }
      console.log(args,query,pairs)
      return query;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
