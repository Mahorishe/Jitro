$(function(){
  $('.slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    prevArrow: "<img src='img/arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/arrow.svg' class='next' alt='2'>",
    fade: true,
    asNavFor: '.slider__mini-items',
  });
  $('.slider__mini-items').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__items',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.works__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });
});