document
    .querySelector('.nav-logout')
    .addEventListener('click', async () => {   
  
    const result = await fetch('/api/user/logout', {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json' }
    });
  
    if (result.ok) {
        document.location.replace('/');
    } else {
        console.log('Delete failed.');
    }  
});