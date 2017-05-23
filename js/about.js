document.addEventListener('DOMContentLoaded', function() {

  var attendee = document.querySelector('#attendee-container');
  var guests = [
    'YOGA INSTRUCTORS',
    'FITNESS FANATICS',
    'FARM TO TABLERS',
    'NUTRITIONISTS',
    'ENVIRONMENTALISTS',
    'CHEFS',
    'GASTRONOMISTS',
    'LOCAL CATERERS',
    'YOU'
  ];

  setInterval(function() {
    var randomGuestIndex = Math.floor(Math.random() * guests.length);
    var randomGuest = '<h3 class="attendee-text gradient-text">' + guests[randomGuestIndex] + '</h3>';
    attendee.innerHTML = randomGuest;

  }, 2000)

});
