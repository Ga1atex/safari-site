$(function () {
  $('.about__popup-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.gallery__slider').slick({
    draggable: false,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="slider__arrows slider__arrows-prev gallery__slider-arrows" src="images/arrow-prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="slider__arrows slider__arrows-next gallery__slider-arrows" src="images/arrow-next.svg"></button>',
  });


  $('.gallery__item-inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
  });
});