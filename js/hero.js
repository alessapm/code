document.addEventListener("DOMContentLoaded", function() {
  // Set the date we're counting down to
  var countDownDate = new Date("Nov 9, 2017 18:00:00").getTime();
  var earlyBirdDate = new Date("Aug 1, 2017 18:00:00").getTime();
 // Update the count down every 1 second
  var x = setInterval(function() {

   // Get todays date and time
    var now = new Date().getTime();

   // Find the distance between now an the count down date
    var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + " Days<br/> <span>until EXPOSED!</span>" ;
    if (now < earlyBirdDate) {
      var earlyBirdTimer = earlyBirdDate - now;
      var earlyBirdDaysLeft = Math.floor(earlyBirdTimer / (1000 * 60 * 60 * 24));
      document.getElementById("countdown").innerHTML = earlyBirdDaysLeft + ' Days Left <br/><span style="font-size:.8em">for Early Bird!</span>';
    } else if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    } else {
      document.getElementById("countdown").innerHTML = days + " Days Until Exposed!";
    }

  }, 1000);

});
