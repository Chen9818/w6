// $(function() {
//   console.log('Hello Bootstrap5');
// });

// console.log("123")
// alert("1111

import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  // 分頁   
  pagination: {
    el: '.swiper-pagination',
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 滾動條
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});