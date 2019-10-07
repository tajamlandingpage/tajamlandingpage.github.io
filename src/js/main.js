$(document).ready(function () {
  //слайдер с работами
  $('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //слайдер с отзывами
  $('.single-item').slick({
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    prevArrow: '<button type="button" class="prev"></button>',
    nextArrow: '<button type="button" class="next"></button>',
    responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: false
      }
    }
  ]
  });

});