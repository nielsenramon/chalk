//= require_self

$(document).ready(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.appear').scrollAppear();
  }

  // Fluidbox
  $('.fluidbox-trigger').fluidbox();

  // Share buttons
  $('.btn-share').on('click', function() {
    window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener');
    return false;
  });
});
