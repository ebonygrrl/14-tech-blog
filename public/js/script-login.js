const loginForm = async (e) => {
  e.preventDefault();

  const msg = document.querySelector('.message');
  const formData = new FormData(e.currentTarget);

  const result = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  });

  const json = await result.json();

  if (result.ok) {
    //document.location.replace('/dashboard');
  } else {
    msg.textContent = json.message;
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginForm);