document.addEventListener('DOMContentLoaded', () => {
  // Referencia al body y al botón
  const body = document.querySelector('body');
  const toggleBtn = document.getElementById('toggleDarkMode');

  // Si no existe un botón con ese ID, no hacemos nada
  if (!toggleBtn) return;

  // Al hacer clic, alternamos la clase modo-oscuro
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

  // Al cargar la página, revisa si el usuario tenía modo oscuro
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('modo-oscuro');
    toggleBtn.textContent = 'Modo Claro';
  }
});
