function menuClose() {
  $('.js-menu-toggler').removeClass('is-active');
  $('.js-menu-toggler').find('use').attr('xlink:href', 'images/sprite.svg#burger');
  $('.main-menu').removeClass('is-open');
  setTimeout(function() {
    $('.main-menu').slideUp();
    $('body').removeClass('overflow');
    $('.header').removeClass('is-open');
  }, 300);
}

//тогглер главного меню на мобильных
$(document).on('click', '.js-menu-toggler', function () {
  let _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close');
    $('body').addClass('overflow');
    $('.header').addClass('is-open');
    $('.main-menu').css('display', 'flex');
    setTimeout(function() {
      $('.main-menu').addClass('is-open');
    }, 300);
  } else {
    menuClose();
  }

  return false;
});

$(document).ready(function () {
  //следящее меню
  if ($('.js-main-menu').length) {
    $('.js-main-menu').ddscrollSpy({
      highlightclass: 'is-active'
    });
  }
});

//слайдер карточек результатов
if ($('.js-results-slider').length) {
  const swiper = new Swiper('.js-results-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 12,
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
      1024: {
        centeredSlides: false,
        slidesPerView: 3
      }
    }
  });
}

//аккордион faq
$(document).on('click', '.accordion__toggler', function () {
  $(this).closest('.accordion').toggleClass('is-open');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});

//табы faq
$(document).on('click', '.tabs__button', function () {
  $(this).closest('.tabs').find('.tabs__button').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-tab="'+$(this).attr('data-tab')+'"]').addClass('is-active');
  return false;
});

//тогглер пароля
$(document).on('click', '.js-toggle-password', function () {
  if($(this).hasClass('is-toggled')) {
    $(this).closest('.input').find('input').attr('type', 'password');
    $(this).removeClass('is-toggled');
    $(this).attr('title', 'Показать символы');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#show_pass');
  } else {
    $(this).closest('.input').find('input').attr('type', 'text');
    $(this).addClass('is-toggled');
    $(this).attr('title', 'Скрыть символы');
    $(this).find('use').attr('xlink:href', 'images/sprite.svg#hide_pass');
  }

  return false;
});
