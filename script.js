const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('.join-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('.form-submit');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Submitted';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1800);
    }
  });
}
