document.addEventListener('DOMContentLoaded', function() {

  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links-n-button');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('dropdown-menu');
  })

});
