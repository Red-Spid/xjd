import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/index.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/home',redirect:{name:'jd'}},
  {
    path: '/',
    name: 'jd',
    component: home,
    meta: {title:'多快好省，购物上京东！',keyword:'success-list',description:'维修工列表'}
  }
]

var new_json = [
  {
      title: "京东商品分类 - 京东商城",
      path: "class",
  }, 
  {
      title: "京东登录注册",
      path: "sigin",
  }, 
  {
      title: "购物车",
      path: "cart",
  },
  {
      title: "惊喜",
      path: "jx",
  },
];

new_json.forEach((item) => {
  var title = item.title;
  var path = item.path;
  var temp = {
      path: '/' + path,
      component:() => import(`@/views/${path}/${path}.vue`),
      meta: { title: title }
  }
  routes.push(temp);
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
