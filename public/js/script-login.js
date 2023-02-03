const loginForm = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const result = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log(result);

  if (result.ok) {
    console.log('200');
    //document.location.replace('/dashboard');
  } else {
    //alert('Failed to sign up.');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginForm);