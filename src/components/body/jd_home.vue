<template>
  <div>
    <div class="wrapper">
        <div v-for="(item,i) in picList" :key="i"><img :src="item.src">
          <img :src="item.src" alt="" srcset="">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Swiper", // 此处不能用Swiper作为name，否则报错
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination", // 轮播图的点
        loop:true, // 循环
      },
      picList:[
          {id:0,src:'https://gtms01.alicdn.com/tps/i1/T1Ww_JFEpdXXcZd9sr-640-200.png'},
          {id:1,src:'https://gw.alicdn.com/imgextra/i3/149/O1CN01wekXPw1CyHZ23AC4R_!!149-0-lubanu.jpg'}
      ]
    };
  }
};
</script>