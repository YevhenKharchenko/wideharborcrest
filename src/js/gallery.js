import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryLeftArrow = document.getElementById('galleryLeftArrow');
const galleryRightArrow = document.getElementById('galleryRightArrow');

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 16,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.gallery-swiper-container').classList.add('show');
      updateGalleryArrows(swiper);
    },
    slideChange(swiper) {
      updateGalleryArrows(swiper);
    },
    reachEnd(swiper) {
      updateGalleryArrows(swiper);
    },
    reachBeginning(swiper) {
      updateGalleryArrows(swiper);
    },
  },
});

updateGalleryArrows(gallerySwiper);

function updateGalleryArrows(swiper) {
  galleryLeftArrow.disabled = swiper.isBeginning;
  galleryRightArrow.disabled = swiper.isEnd;
}

galleryLeftArrow.addEventListener('click', () => {
  gallerySwiper.slidePrev();
});

galleryRightArrow.addEventListener('click', () => {
  gallerySwiper.slideNext();
});
