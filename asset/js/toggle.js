const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navbarLinks = document.getElementsByClassName('navbar-menu') [0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});


function init() {
  var vidDefer = document.getElementsByTagName('iframe');
  for (var i=0; i<vidDefer.length; i++) {
  if(vidDefer[i].getAttribute('data-src')) {
  vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
  } } }
  window.onload = init;

