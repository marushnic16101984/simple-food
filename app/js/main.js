$(function () {

  $('.review__wrapper').slick({
    dots: true

  }

  )


  $('.burger').on('click', function () {
    $('.header  ').toggleClass('header--active');
    $('.hero  ').toggleClass('hero--active');
    $('.menu__list').toggleClass('menu__list--active');


  });

  var mixer = mixitup('.product');
});