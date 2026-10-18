document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const inputs = Array.from(form.querySelectorAll('input, textarea'));
    let isValid = true;

    inputs.forEach((input) => {
      const value = input.value.trim();
      const isEmail = input.type === 'email';
      const hasValue = value.length > 0;
      const validEmail = !isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!hasValue || (isEmail && !validEmail)) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      }
    });

    if (isValid) {
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Message sent!';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
        form.querySelectorAll('input, textarea').forEach((input) => {
          input.classList.remove('is-valid', 'is-invalid');
        });
      }, 1800);
    }
  });
});
