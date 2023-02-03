const signupForm = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const response = await fetch('/api/user/signup', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),    
    headers: { 'Content-Type': 'application/json' }
  });

  //const result = await response.json();

  // if (response.ok) {
  //   //document.location.replace('/');
  // } else {
  //   alert('Failed to sign up.');
  // }  
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupForm);