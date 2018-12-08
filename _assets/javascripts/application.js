//= require_self

$(document).ready(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear();
  }

  // Zooming
  new Zooming(
    {customSize: '100%', scaleBase: 0.9, scaleExtra: 0}
  ).listen('.zooming');

  // Share buttons
  $('.article-share a').on('click', function() {
    window.open($(this).attr('href'), 'Share', 'width=200,height=200,noopener');
    return false;
  });
});

//Theme initialize
if (!localStorage.getItem('theme'))
  localStorage.setItem('theme', "light");
themer();

// Theme toggle
function toggle() {
  if(localStorage.getItem('theme') == "light")
    localStorage.setItem('theme', "dark");
  else if(localStorage.getItem('theme') == "dark")
    localStorage.setItem('theme', "light");
  themer();
}

// Theme set
function themer() {
  var tone = localStorage.getItem('theme');
  var light = document.getElementById("light");

  if(tone == "dark"){
    dark.disabled = false;
  }
  else{
    dark.disabled = true;
  }
}