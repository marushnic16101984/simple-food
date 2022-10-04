$(function () {

  $('.review__wrapper').slick({
    dots: true

  }

  )




  $(document).on('click', '.js-menu_toggle.burger', function (e) {
    e.preventDefault(); $('.menu__list, .menu__item, .footer__adress, .footer__data, .header__tablet').stop();

    $('.side_menu').css({ 'left': '0px' });

    var count = $('.menu__item, .footer__data, .header__tablet').length;
    $('.menu__list, .footer__adress, .header__tablet ').slideDown((count * .0) * 0);
    $('.menu__item, .footer__data, .header__tablet ').each(function (i) {
      var thisLI = $(this);
      timeOut = 0 * i;
      setTimeout(function () {
        thisLI.css({
          'opacity': '1',
          'margin-left': '0'
        });
      }, 0 * i);
    });
  });

  $(document).on('click', '.js-menu_toggle.opened', function (e) {
    e.preventDefault(); $('.menu__list, .menu__item, .footer__adress, .footer__data, .header__tablet').stop();

    $('.side_menu').css({ 'left': '-800px' });

    var count = $('.menu__item, .footer__data, .header__tablet').length;
    $('.menu__item, .footer__data, .header__tablet').css({
      'transition': '1s',
      'opacity': '0',
      'margin-left': '-20px'
    });
    $('.menu__list, .footer__adress, .header__tablet').slideUp(0);
  });

  $('.js-menu_toggle.burger').on('click', function () {
    $('.logo__img').addClass('logo__img--active');
  });
  $('.js-menu_toggle.opened').on('click', function () {
    $('img').removeClass('logo__img--active');
  });


  var mixer = mixitup('.product');
});





