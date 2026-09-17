// Inkwell: small, dependency-free interactions.
const welcome = new URLSearchParams(window.location.search).get('welcome');
const banner = document.getElementById('welcome-banner');
if (welcome && banner) {
  banner.hidden = false;
  banner.textContent = 'Welcome back, ' + welcome.slice(0, 80) + '!';
}
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}
const form = document.getElementById('newsletter-form');
const email = document.getElementById('newsletter-email');
const status = document.getElementById('newsletter-status');
if (form && email && status) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = 'Preview complete. No subscription was created, and your email was not sent or stored.';
    form.reset();
  });
}
const count = document.getElementById('post-count');
if (count) count.textContent = document.querySelectorAll('.post-card').length + ' posts';
