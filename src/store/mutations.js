function increment(state){
    var {log} = console;
    state.args={}
    state.args.url = location.pathname
    let date = new Date();
    Date.prototype.Format = function(fmt)
    {
      var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
      };
      if(/(y+)/.test(fmt))
      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
      for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      return fmt;
    };
    state.time= date.Format('yyyy-MM-dd hh:mm:ss.S q')
    state.b=10
    window.localStorage.setItem('query','[]')
    state.local=window.localStorage.getItem('query')
    log(state)
  }
  export default {increment}