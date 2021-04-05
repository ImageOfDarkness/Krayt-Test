$(document).ready(function () {
    $('.introducing__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
    });
});
$(document).ready(function () {
    $('.ourSpace__slider-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '40px',
        arrows: true,
        prevArrow: $('.ourSpace__top-arrow-prew'),
        nextArrow: $('.ourSpace__top-arrow-next'),
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });
});

