$(function () {




  $('.popular__item ').on('click', function () {
    $('.popular__btn').toggleClass('popular__btn--active');

  });

  var mixer = mixitup('.product');
});