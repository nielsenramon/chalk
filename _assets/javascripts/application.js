//= require_self

// Share buttons
$('.btn-share').on('click', function() {
  window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener');
  return false;
});

$(document).on('turbolinks:load', function () {
  // Initialize ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.appear').scrollAppear();
  }

  // Initialize fluidbox
  $('.fluidbox-trigger').fluidbox();

  // Track page views on Turbolinks
  if (typeof ga === 'function') {
    ga('send', 'pageview', location.pathname);
  }
});
