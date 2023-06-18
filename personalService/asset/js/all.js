// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.


(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(375);

$(function () {
  // tool show/hide
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $('.gotop, .mediaIcons').fadeIn(300);
    } else {
      $('.gotop, .mediaIcons').fadeOut(300);
    }
  }).trigger('scroll'); // goTop鈕

  $('.gotop').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
  var swiper = new Swiper('[data-slider]', {
    slidesPerView: 1,
    loop: true,
    // allowTouchMove: true,
    // simulateTouch: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    on: {
      slideChange: function slideChange() {
        $('[data-tab]').removeClass('-active').eq(this.realIndex).addClass('-active');
      }
    }
  });
  $('[data-tab]').on('click', function (e) {
    e.preventDefault();
    swiper.slideTo($(this).data('tab'));
  }); // 收合

  $('[data-collapse-action]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
  }); // 進場

  gsap.registerPlugin(ScrollTrigger);
  var bannerTl = gsap.timeline();
  bannerTl.to('.banner-main', {
    duration: .6,
    y: 0,
    scaleY: 1.1,
    opacity: 1,
    ease: 'power1.inOut'
  }).to('.banner-main', {
    duration: .3,
    y: 0,
    scaleY: 1,
    ease: 'power1.inOut'
  });
  gsap.set('.letter-item.-l', {
    x: '-50%'
  });
  gsap.to('.letter-item.-l', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.letter',
      start: 'top 80%'
    }
  });
  gsap.set('.letter-item.-r', {
    x: '50%'
  });
  gsap.to('.letter-item.-r', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.letter',
      start: 'top 80%'
    }
  });
  gsap.set('.capsule-item', {
    y: '50%'
  });
  gsap.to('.capsule-item', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.capsule',
      start: 'top 80%'
    }
  });
  gsap.set('.card.-t .event-item', {
    y: '50%'
  });
  gsap.to('.card.-t .event-item', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.card.-t',
      start: 'top 80%'
    }
  });
  gsap.set('.card.-b .event-item', {
    y: '50%'
  });
  gsap.to('.card.-b .event-item', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.card.-b',
      start: 'top 80%'
    }
  });
  gsap.set('.gift-item.-l .-fadeIn', {
    x: '-50%'
  });
  gsap.to('.gift-item.-l .-fadeIn', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.gift',
      start: 'top 80%'
    }
  });
  gsap.set('.gift-item.-r .-fadeIn', {
    x: '50%'
  });
  gsap.to('.gift-item.-r .-fadeIn', {
    duration: 0.6,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.gift',
      start: 'top 80%'
    }
  });
});