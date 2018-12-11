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