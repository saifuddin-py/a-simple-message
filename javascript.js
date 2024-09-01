document.addEventListener('DOMContentLoaded', () => {
  const messagesElement = document.getElementById('messages');
  const button = document.getElementById('nextMessageButton');

  const allMessages = [
    "Zoya, you're amazing!",
    "Thank you for always being there for me.",
    "I love you more than words can say.",
    "You make my world brighter every day.",
    "Your smile lights up my life.",
    "I'm grateful for every moment with you.",
    "You're my sunshine on a cloudy day.",
    "Every day with you is a gift."
  ];

  let index = 0;

  button.addEventListener('click', () => {
    if (index < allMessages.length) {
      const message = document.createElement('p');
      message.className = 'message';
      message.textContent = allMessages[index];
      messagesElement.appendChild(message);
      index++;
    }
  });

  // Create and add stars to the background
  const starCount = 50;
  const background = document.querySelector('.background');
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    background.appendChild(star);
  }
});
