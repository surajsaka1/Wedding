/* js/script.js */

// Set the wedding date (update this date as needed)
const weddingDate = new Date("June 30, 2025 00:00:00").getTime();

const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    // If the date is past, display zeros
    daysSpan.innerText = "00";
    hoursSpan.innerText = "00";
    minutesSpan.innerText = "00";
    secondsSpan.innerText = "00";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerText = days < 10 ? "0" + days : days;
  hoursSpan.innerText = hours < 10 ? "0" + hours : hours;
  minutesSpan.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsSpan.innerText = seconds < 10 ? "0" + seconds : seconds;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
