const signupForm = async (e) => {
  e.preventDefault();

  const msg = document.querySelector('.message');
  const formData = new FormData(e.currentTarget);

  const response = await fetch('/api/user/signup', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),    
    headers: { 'Content-Type': 'application/json' }
  });

  const result = await response.json();

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    msg.textContent = result;
  }  
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupForm);