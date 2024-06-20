document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date("July 1, 2024 00:00:00").getTime();
  
    const timer = setInterval(function() {
      let now = new Date().getTime();
      let distance = targetDate - now;
  
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
  
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerHTML = "Wakacje już się zaczęły!";
      }
    }, 1000);
  });
  