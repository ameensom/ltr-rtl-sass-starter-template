$(document).ready(function () {
  var currentlocal = $('html').attr('lang'),
    url = window.location.href,
    urlLang;
  // POPUP
  var showOverly = function (boxclass) {
    var _ = $(this);
    $('.overly').stop(true, true).fadeIn().addClass('visible');
    if (typeof boxclass === "string") {
      $('.overly>.' + boxclass + '').addClass('show');
    } else {
      $('.overly>.' + _.attr('id') + '').addClass('show');
    }
    return false;
  };
  var hideOverly = function () {
    $('.overly').stop(true, true).fadeOut(400);
    setTimeout(function () {
      $('.overly>div').removeClass('show');
    }, 400);
  };
  $('.overly').on('click', function (e) {
    if ($(e.target).closest('.box').length !== 1) {
      hideOverly();
    }
    if ($(e.target).attr('class') === 'button') {
      return true;
    }
    return false;
  });
  $('.overly-open').on('click', showOverly);
  $('.overly-close').on('click', hideOverly);
  // Responsive on window resize function
  var resizeWindow = function () {
    if (Modernizr.mq('(max-width: 1200px)')) {
      // Mobile/Table Devices Actions
    }
    if (Modernizr.mq('(min-width: 1200px)')) {
      // Desktop/Laptop Devices Actions
    }
  };
  resizeWindow();
  $(window).on('resize', resizeWindow);

});
