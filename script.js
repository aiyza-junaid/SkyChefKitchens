const endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);

function updateCountdown() {
  const currentTime = new Date().getTime();
  const timeDifference = endTime - currentTime;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


  const timerElement = document.getElementById('clock');
  timerElement.innerHTML = `
    <p>${days} : ${hours} : ${minutes} : ${seconds} </p>
  `;

  
  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    timerElement.innerHTML = '<p>Countdown expired!</p>';
  }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
