//initializing the swiper js

const swiper=new Swiper('.swiper',{
    loop:true,

    //if we need the pagination
    pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 // And if we need scrollbar
 

})

