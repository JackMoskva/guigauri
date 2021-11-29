// Swiper Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    },
    formatFractionTotal: function (number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="slider-delimiter"></span>' +
        '<span class="' + totalClass + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    0: {
      slidesPerView: 1,
    }
  }
});