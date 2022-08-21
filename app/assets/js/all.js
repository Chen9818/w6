// $(function() {
//   console.log('Hello Bootstrap5');
// });

// console.log("123")
// alert("1111

// import Swiper from 'swiper';

const swiper = new Swiper(".swiper", {
  autoplay: {
      disableOnInteraction: false,
      delay: 0
  },
  speed: 3000,
  loop: true,
  watchSlidesProgress: true,
  // spaceBetween: 16,
  // slidesPerView: 10,
  //多欄
  breakpoints: {
      480: {
          slidesPerView: 3
      },
      768: {
          slidesPerView: 5
      },
      1200: {
          slidesPerView: 10
      }
  }

});