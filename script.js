// Keep the interface state simple and predictable for the mobile menu, theme, and card filters.
const state = {
  menuOpen: false,
  theme: document.documentElement.dataset.theme || 'mocha',
  filter: 'all',
};

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('#theme-toggle');
const filterButtons = Array.from(document.querySelectorAll('.filter-chip'));
const cards = Array.from(document.querySelectorAll('.resource-card'));

function renderNav() {
  nav.classList.toggle('is-open', state.menuOpen);
  menuToggle.setAttribute('aria-expanded', String(state.menuOpen));
}

function renderTheme() {
  document.documentElement.dataset.theme = state.theme;
  themeToggle.setAttribute('aria-pressed', String(state.theme === 'dark'));
  themeToggle.textContent = state.theme === 'dark' ? 'Light theme' : 'Switch theme';
}

function renderCards() {
  cards.forEach((card) => {
    const matches = state.filter === 'all' || card.dataset.category === state.filter;
    card.classList.toggle('is-hidden', !matches);
  });
}

menuToggle?.addEventListener('click', () => {
  state.menuOpen = !state.menuOpen;
  renderNav();
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    state.menuOpen = false;
    renderNav();
  });
});

themeToggle?.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'mocha' : 'dark';
  renderTheme();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((chip) => {
      const isActive = chip.dataset.filter === state.filter;
      chip.classList.toggle('is-active', isActive);
      chip.setAttribute('aria-pressed', String(isActive));
    });
    renderCards();
  });
});

renderNav();
renderTheme();
renderCards();
