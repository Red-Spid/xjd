import axios from 'axios'

//get_jd_category_one
axios.defaults.baseURL = 'http://106.12.85.17:8090/vuedemo/'

function read(a){
  return axios.get(a).then((res) => {
    return res.data.data
  })
}
function helloWorld(a){
  return axios.get(a,{
    params: {
      id: 1
    }
  }).then((res) => {
    return res.data.data
  })
}
function test(){
  return axios
  .get('https://red-spid.github.io/data/json/jx.json')
  .then(res => {
    return res.data
  })
}
export default{
 helloWorld,
 test,
 read
}
// var record=function(a){
//   axios.get(a,{
//         params: {
          
//         }
//   })
//   .then(res => {
//     console.log('数据是:', res.data.data);
//     return res.data;
//   })
  // .catch((e) => {
  //   console.log('获取数据失败',e);
  // });
// }