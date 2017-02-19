//= require_self

$(document).on('turbolinks:load', function () {
  // Initialize fluidbox
  $('.fluidbox-trigger').fluidbox();

  // Track page views on Turbolinks
  if (typeof ga === 'function') {
    ga('send', 'pageview', location.pathname);
  }

  // Initialize scrollreveal
  sr.reveal('.reveal', {
    distance: '0',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'top',
    scale: 1,
    reset: false,
    viewFactor: 0
  });
});

window.sr = ScrollReveal({ reset: true });
