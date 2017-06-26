
$(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.appear').scrollAppear();
  }

  // Fluidbox
  $('.fluidbox-trigger').fluidbox();

  // Share buttons
  $('.article-share a').on('click', function() {
    window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener');
    return false;
  });
});
