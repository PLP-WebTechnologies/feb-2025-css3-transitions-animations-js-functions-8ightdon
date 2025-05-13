const button = document.getElementById('colorButton');

// Load user preference
const storedColor = localStorage.getItem('buttonColor');
if (storedColor) {
  button.style.backgroundColor = storedColor;
}

// Add click event
button.addEventListener('click', () => {
  // Trigger animation
  button.classList.add('animate');
  setTimeout(() => button.classList.remove('animate'), 500);

  // Change button color and store it
  const newColor = getRandomColor();
  button.style.backgroundColor = newColor;
  localStorage.setItem('buttonColor', newColor);
});

// Helper to generate a random hex color
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
