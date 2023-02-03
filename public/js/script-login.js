const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', async (e) => {          
    e.preventDefault();
  
    const formData = new FormData(loginForm);
  
    const result = await fetch('/api/user/signin', {
      method: 'POST',
      body: formData,
      header: { 'Content-Type': 'multipart/form-data' }
    });
  
    if (result.ok) {
      console.log('200');
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }  
});