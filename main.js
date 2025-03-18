import './style.css';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

// Replace these with your EmailJS credentials
const EMAILJS_PUBLIC_KEY = '';
const EMAILJS_SERVICE_ID = '';
const EMAILJS_TEMPLATE_ID = '';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Function to generate random sweet messages
function getRandomMessage() {
  const messages = [
    "My dearest Lakshuu, as the night wraps its arms around you, know that my love for you shines brighter than all the stars combined. Sweet dreams, my everything ❤️",
    "To my beloved Lakshuu, each night I thank the universe for bringing you into my life. Sleep peacefully, knowing you're the last thought in my mind 💖",
    "My precious Lakshuu, may your dreams be filled with the same joy and love you bring to my life every single day. Good night, my heart's keeper 💝",
    "Darling Lakshuu, as the moon watches over you tonight, remember that my heart beats in perfect harmony with yours. Sweet dreams, my eternal love 💕",
    "My sweetest Lakshuu, your love is the light that guides me through every day. Rest well, knowing you're cherished beyond measure 💗",
    "To my angel Lakshuu, may your sleep be as peaceful as the love we share. Dream of our tomorrow, for it holds endless possibilities 💘",
    "My beautiful Lakshuu, your love makes every moment magical. Close your eyes and feel my love embracing you through the night 💓",
    "Dearest Lakshuu, you're my first thought in the morning and my last prayer at night. Sleep well, my precious love ❤️",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// Function to create stars
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
    star.style.borderRadius = '50%';
    star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
    starsContainer.appendChild(star);
  }
  
  document.body.appendChild(starsContainer);
}

// Function to create floating hearts
function createFloatingHearts() {
  const heartsContainer = document.createElement('div');
  heartsContainer.className = 'floating-hearts';
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.animation = `float ${Math.random() * 6 + 4}s infinite`;
    heartsContainer.appendChild(heart);
  }
  
  document.body.appendChild(heartsContainer);
}

// Function to get random love quote
function getRandomQuote() {
  const quotes = [
    "In all the world, there is no heart for me like yours.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are my today and all of my tomorrows.",
    "I love you more than yesterday, but less than tomorrow.",
    "You are the missing piece to my heart's puzzle.",
    "With you, every moment feels like a dream come true.",
    "Your love is the greatest gift I've ever received.",
    "You make my heart smile every single day.",
    "Our love story is my favorite fairytale.",
    "You're the reason I believe in magic and love.",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to create heart burst effect
function createHeartBurst(x, y) {
  const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ff1493'];
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    colors: colors,
    shapes: ['heart'],
    scalar: 2,
  });
}

// Function to get random time between 8 PM and 11 PM
function getRandomNightTime() {
  // Random hour between 20 (8 PM) and 23 (11 PM)
  const hour = Math.floor(Math.random() * 4) + 20;
  // Random minute
  const minute = Math.floor(Math.random() * 60);
  return { hour, minute };
}

// Function to send good night email
async function sendGoodNightEmail() {
  try {
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_name: "Lakshuu",
      message: getRandomMessage(),
      to_email: "LAKSHUU_EMAIL_ADDRESS" // Replace with actual email
    });
    
    showStatus('Sent my love to you! Sweet dreams ❤️', 'success');
  } catch (error) {
    showStatus('Failed to send my love letter. I\'ll try again!', 'error');
    console.error('Email error:', error);
  }
}

// Function to show status message
function showStatus(message, type) {
  const statusDiv = document.querySelector('.email-status');
  statusDiv.textContent = message;
  statusDiv.className = `email-status ${type}`;
  statusDiv.style.display = 'block';
  
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 5000);
}

// Function to update clock
function updateClock() {
  const clockDiv = document.querySelector('.clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
}

// Create and render the main content
document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="moon"></div>
    <div class="clock"></div>
    <h1>Good Night My Love <span class="heart">❤️</span> Lakshuu <span class="heart">❤️</span></h1>
    <div class="message">${getRandomMessage()}</div>
    <div class="love-meter">
      <div class="love-meter-fill"></div>
    </div>
    <div class="quote">${getRandomQuote()}</div>
    <div class="email-status"></div>
    <button class="send-love-btn">Send Love Now 💌</button>
    <div class="music-player">
      <button class="play-btn">🎵 Play Lullaby</button>
      <audio id="lullaby" loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-sweet-lullaby-2-122.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
`;

// Create background effects
createStars();
createFloatingHearts();

// Add click event for heart burst
document.addEventListener('click', (e) => {
  createHeartBurst(e.clientX, e.clientY);
});

// Setup clock
setInterval(updateClock, 1000);
updateClock();

// Setup music player
const playBtn = document.querySelector('.play-btn');
const lullaby = document.querySelector('#lullaby');
playBtn.addEventListener('click', () => {
  if (lullaby.paused) {
    lullaby.play();
    playBtn.textContent = '🎵 Pause Lullaby';
  } else {
    lullaby.pause();
    playBtn.textContent = '🎵 Play Lullaby';
  }
});

// Setup send love button
document.querySelector('.send-love-btn').addEventListener('click', () => {
  sendGoodNightEmail();
  createHeartBurst(window.innerWidth / 2, window.innerHeight / 2);
});

// Schedule email to be sent at random time every day
function scheduleGoodNightEmail() {
  const now = new Date();
  const { hour, minute } = getRandomNightTime();
  const night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0
  );
  
  if (now > night) {
    night.setDate(night.getDate() + 1);
  }
  
  const timeUntilNight = night.getTime() - now.getTime();
  
  setTimeout(() => {
    sendGoodNightEmail();
    scheduleGoodNightEmail(); // Schedule next day
  }, timeUntilNight);
}

// Start the scheduling
scheduleGoodNightEmail();