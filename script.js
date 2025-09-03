const root = document.documentElement;
const toggleButton = document.getElementById("toggleMode");

// Load saved mode on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "light") {
    setLightMode();
  } else {
    setDarkMode(); // default
  }
});

// Toggle mode on button click
toggleButton.addEventListener("click", () => {
  const currentMode = localStorage.getItem("theme");
  if (currentMode === "light") {
    setDarkMode();
  } else {
    setLightMode();
  }
});

// Mode functions
function setLightMode() {
  root.style.setProperty('--bg', '#f4f4f4');
  root.style.setProperty('--text', '#111');
  root.style.setProperty('--accent', '#6a00ff');
  root.style.setProperty('--glow', '#aa00ff');
  localStorage.setItem("theme", "light");
  animateGhostShift("light");
}

function setDarkMode() {
  root.style.setProperty('--bg', '#0b0c10');
  root.style.setProperty('--text', '#e0e0e0');
  root.style.setProperty('--accent', '#8f00ff');
  root.style.setProperty('--glow', '#ff00cc');
  localStorage.setItem("theme", "dark");
  animateGhostShift("dark");
}
function animateGhostShift(mode) {
  document.body.classList.add("ghost-shift");
  setTimeout(() => {
    document.body.classList.remove("ghost-shift");
  }, 1000);
}

