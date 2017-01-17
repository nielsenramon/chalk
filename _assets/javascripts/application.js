//= require_self

$(document).on('turbolinks:load', function (event) {
  baguetteBox.run('.js-baguette-box')

  // Track page views on Turbolinks
  if (typeof ga === 'function') {
    ga('set', 'location', event.data.url)
    ga('send', 'pageview')
  }
});
