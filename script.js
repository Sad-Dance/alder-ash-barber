const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const modal = document.getElementById('bookingModal');
const openBooking = document.getElementById('openBooking');
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function setModal(open) {
  modal.classList.toggle('open', open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('modal-open', open);
}

openBooking.addEventListener('click', () => setModal(true));
document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', () => setModal(false));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setModal(false);
});

bookingForm.addEventListener('submit', e => {
  e.preventDefault();
  successMessage.classList.add('show');
  bookingForm.reset();
});
