const signupForm = async (e) => {
  e.preventDefault();

  console.log();
  
  const response = await fetch('/api/user/signup', {
    method: 'POST',
    body: new FormData(document.querySelector('form'))
  });

  const result = await response.json();

  console.log(result.message);

  // if (result.ok) {
  //   //console.log('200');
  //   //document.location.replace('/');
  // } else {
  //   alert('Failed to sign up.');
  // }  
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupForm);