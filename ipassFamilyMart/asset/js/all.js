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
  }); // 注意事項

  $('[data-notice-btn]').on('click', function (e) {
    e.preventDefault();
    $('[data-notice]').addClass('-open');
  }); // 進場

  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.banner-door.-left img', {
    duration: 1.5,
    x: '-41.5%',
    ease: 'power1.out'
  });
  gsap.to('.banner-door.-right img', {
    duration: 1.5,
    x: '41.5%',
    ease: 'power1.out'
  });
  gsap.set('.banner-wording', {
    y: '20%'
  });
  gsap.to('.banner-wording', {
    duration: 1,
    delay: 0.7,
    y: 0,
    opacity: 1,
    ease: 'power1.out'
  });
  gsap.set('.card', {
    scale: 0.6
  });
  gsap.to('.card', {
    duration: 0.8,
    scale: 1,
    opacity: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.discount',
      start: 'top 80%'
    }
  });
});