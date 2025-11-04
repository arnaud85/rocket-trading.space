function createStars() {
  const starsContainer = document.getElementById('stars-container');
  const starsSparse = document.getElementById('stars-sparse');

  if (starsContainer) {
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3}px;
        height: ${Math.random() * 3}px;
        background: white;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.7 + 0.3};
        animation: twinkle ${Math.random() * 3 + 2}s infinite;
      `;
      starsContainer.appendChild(star);
    }
  }

  if (starsSparse) {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        position: absolute;
        width: ${Math.random() * 2}px;
        height: ${Math.random() * 2}px;
        background: white;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: twinkle ${Math.random() * 4 + 3}s infinite;
      `;
      starsSparse.appendChild(star);
    }
  }
}

const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createStars);
} else {
  createStars();
}

export default createStars;
