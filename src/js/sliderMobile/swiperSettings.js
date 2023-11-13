const currentWidth = window.innerWidth
import { Swiper } from './swiperCore'

if (currentWidth < 768) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
