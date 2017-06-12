;(function ($, window, document, undefined) {

  var els = [];

  // Public methods
  var pluginApi = {
    init: function() {
      this.each(function() {
        els.push($(this));
      });

      refreshVisibility(els);

      $(window).scroll(function () {
        refreshVisibility(els);
      });
      return this;
    }
  };

  // Private Methods
  var refreshVisibility = function (els) {
    $.each(els, function() {
      if ($(this)[0].getBoundingClientRect().top < $(window).height()) {
        $(this).addClass('appeared');
      }
    });
  };

  // Attach plugin to jQuery namespace
  $.fn.scrollAppear = function(method) {
    if (pluginApi[method]) {
      return pluginApi[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return pluginApi.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + 'does not exist in scrollAppear.');
    }
  };
}(jQuery, window, document));
