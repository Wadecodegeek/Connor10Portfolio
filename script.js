// Mobile menu toggle

const navToggle = document.getElementById('navToggle');

const menu = document.getElementById('menu');

if (navToggle) {

  navToggle.addEventListener('click', () => {

    const open = menu.classList.toggle('open');

    navToggle.setAttribute('aria-expanded', String(open));

  });

}


const name = "Messi";

if (name === "Ronaldo") {
    console.log("GOAT");
} else if (name) {
    console.log("FIFA Fraud");
} else {
    console.log("Player");
}

/* Dark mode toggle with localStorage */
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
root.classList.toggle('dark', savedTheme !== 'light');
root.setAttribute('data-theme', savedTheme === 'light' ? 'light' : 'dark');

function updateThemeButton() {
  if (!themeToggle) return;
  const isDark = root.classList.contains('dark') || root.dataset.theme === 'dark';
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

updateThemeButton();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = root.classList.contains('dark') || root.dataset.theme === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    root.classList.toggle('dark', nextTheme === 'dark');
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeButton();
  });
}

 

// Optional: basic form feedback (works with Netlify & mailto)

const form = document.querySelector('form.contact-form');

if (form) {

  form.addEventListener('submit', (e) => {

    // Let Netlify handle the POST; add a tiny UX hint

    const btn = form.querySelector('button[type="submit"]');

    btn.disabled = true;

    btn.textContent = 'Sending...';

  });

}