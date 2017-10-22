;(function ($) {

  var els = [];

  var refreshVisibility = function() {
    $.each(els, function() {
      if ($(this)[0].getBoundingClientRect().top < $(window).height()) {
        $(this).addClass('appeared');
      }
    });
  };

  $.fn.scrollAppear = function() {
    this.each(function() {
      els.push($(this));
      $(this).addClass('appear');
    });

    refreshVisibility();

    $(window).scroll(function() {
      refreshVisibility();
    });
    return this;
  };
}(jQuery));
