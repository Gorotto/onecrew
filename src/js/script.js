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

  // $(".modais").iziModal({
  //   history: false,
  //   iframe : true,
  //   fullscreen: true,
  //   headerColor: '#000000',
  //   // group: 'group1',
  //   loop: true
  // });

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

  // works-slider
  var mySwiper = new Swiper ('.works-slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup:3,
    speed: 1000,
    loop: true,
      autoplay: {
          delay: 4000,
          waitForTransition: true,
          disableOnInteraction: false,
        },
    //   flipEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">'+
              '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"'+
              'stroke-opacity="1" stroke-width="1.5px"></circle>'+
          '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>'+
              '</svg></span>';
          },
  
      },
  
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    })
    ///
  
});