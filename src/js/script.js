$(document).ready(function(){
  $(".sandwich").click(function () {
      $(this).toggleClass("active");
      $(".mobile__menu").toggleClass("active");
  });

  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });
 

  $('.faq__row').on('click',  function() {
    $(this).toggleClass('open');

  });

  $(".modais").iziModal({
    history: false,
    iframe : true,
    fullscreen: true,
    headerColor: '#000000',
    // group: 'group1',
    loop: true
  });

  function initpopularcars() {
    var swiper = new Swiper('.works__wrap', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.works__next',
        prevEl: '.works__prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 20,
        },
      }
    });
  }
  function initcomands() {
    var swiper = new Swiper('.comands__wrap', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.comands__next',
        prevEl: '.comands__prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 40,
        },
      }
    });
  }
  var windowWidth = $(window).width();
  if (windowWidth < 900) {
    initpopularcars();
  }
  if (windowWidth < 1100) {
    initcomands ();
  }

  $('.smoothScroll').click(function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
    event.preventDefault();
    var href = $(this).attr('href');
    var target = $(href);
    var top = target.offset().top;
    $('html,body').animate({scrollTop: top}, 1000);
    return false;
  }); 
  
});