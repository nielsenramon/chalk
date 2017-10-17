;(function ($, window, document, undefined) {

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
    });

    refreshVisibility();

    $(window).scroll(function() {
      refreshVisibility();
    });
    return this;
  };
}(jQuery, window, document));
