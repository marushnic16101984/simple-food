$(function () {

  $('.review__wrapper').slick({
    dots: true
  }
  )
  $('.popular__assortment').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    easing: 'easy',
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: false,
    variableWidth: true,
    cssEase: String,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"

      }],
    mobileFirst: true

  })

  // $('.popular__assortment').slick({

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         dots: true,
  //         arrows: false
  //       }
  //     }
  //   ]

  // }
  // )


  $(document).on('click', '.js-menu_toggle.burger', function (e) {
    e.preventDefault(); $('.menu__list, .menu__item, .footer__adress, .footer__data, .header__tablet, .header__side').stop();

    $('.side_menu').css({ 'left': '0px' });

    var count = $('.menu__item, .footer__data, .header__tablet, .header__side').length;
    $('.menu__list, .footer__adress, .header__tablet, .header__side ').slideDown((count * .0) * 0);
    $('.menu__item, .footer__data, .header__tablet, .header__side ').each(function (i) {
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
    e.preventDefault(); $('.menu__list, .menu__item, .footer__adress, .footer__data, .header__tablet, .header__side').stop();

    $('.side_menu').css({ 'left': '-800px' });

    var count = $('.menu__item, .footer__data, .header__tablet, .header__side').length;
    $('.menu__item, .footer__data, .header__tablet, .header__side').css({
      // 'transition': '1s',
      'opacity': '0',
      'margin-left': '-20px'
    });
    $('.menu__list, .footer__adress, .header__tablet, .header__side').slideUp(0);
  });

  $('.js-menu_toggle.burger').on('click', function () {
    $('.logo__img').addClass('logo__img--active');
  });
  $('.js-menu_toggle.opened').on('click', function () {
    $('img').removeClass('logo__img--active');
  });
  // $('.js-menu_toggle.burger').on('click', function () {
  //   $('.user-nav').addClass('user-nav--active');
  // });
  // $('.js-menu_toggle.opened').on('click', function () {
  //   $('div').removeClass('user-nav--active');
  // });


  var mixer = mixitup('.product');
});





