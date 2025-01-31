// darkmode.js
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const toggleBtn = document.getElementById('toggleDarkMode');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
      toggleBtn.textContent = 'Modo Claro';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = 'Modo Oscuro';
      localStorage.setItem('theme', 'light');
    }
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('modo-oscuro');
    toggleBtn.textContent = 'Modo Claro';
  }
});
