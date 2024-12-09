function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25); // Christmas: Dec 25
  const diff = christmas - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = '❄';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Fall speed
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';       // Size
  snowContainer.appendChild(snowflake);

  // Remove snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

// Generate snowflakes continuously
setInterval(createSnowflake, 300);
