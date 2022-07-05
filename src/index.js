// add new page
import './index.html';
import './card.html';
import './cart.html';
import './index.scss';

  // import Swiper JS
  import Swiper, {Thumbs, Scrollbar } from 'swiper';
  // import Swiper styles
  import 'swiper/css';
  import 'swiper/css/scrollbar';
  import { pagination } from './modules/pagination';
// создаем обертку и находим и связываем по классу
  const paginationWrapper = document.querySelector('.pagination');

  const pageURL = new URL(location);
// преобразуем строку в число через +
  const page = +pageURL.searchParams.get('page') || 1;
// передаем имя, кол-во страниц 20, кол-во на стр. 6
 try {
  pagination(paginationWrapper, 20, page, 6);
 } catch(e) {
  console.warn(e);
  console.warn('is not main page');
 }

  const thumbSwiper = new Swiper('.card__slider-thumb', {
    spaceBetween: 44,
    sliderPerview: 3,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    modules: [Scrollbar]
   });

 new Swiper('.card__image', {
  spaceBetween: 10,
  sliderPerview: 1,
  thumbs: {
    swiper: thumbSwiper,
    slideThumbActiveClass: '.card__thumb-btn-active',
  },
  modules: [Thumbs]
 });

 new Swiper('.recommended__carousel', {
  spaceBetween: 30,
  sliderPerview: 5,
 });


