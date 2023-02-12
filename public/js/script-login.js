const loginForm = async (e) => {
  e.preventDefault();

  const msg = document.querySelector('.message');
  const formData = new FormData(e.currentTarget);

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  });

  const result = await response.json();

  if (response.ok) {
    document.location.replace('/');
  } else {
    msg.textContent = result.message;
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginForm);