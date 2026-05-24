const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

function handleSubscribe(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.querySelector('input');
  const button = form.querySelector('button');
  const original = button.textContent;

  button.textContent = 'You’re on the list';
  button.disabled = true;
  input.value = '';

  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 3200);
}
