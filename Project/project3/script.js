const background = document.getElementById('background');
const passwordWindow = document.getElementById('passwordWindow');

function showPasswordWindow() {
passwordWindow.classList.add('show')
}

function hidePasswordWindow() {
  passwordWindow.style.visibility = 'hidden';
  background.style.filter = 'none';
}

const passwordWindowInterval = setInterval(showPasswordWindow, 10);
