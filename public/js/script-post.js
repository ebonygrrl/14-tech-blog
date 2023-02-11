const newPostForm = async (e) => {          
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    const result = await fetch('/api/post/new', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (result.ok) {
      console.log('200');
      document.location.replace('/dashboard');
    } else {
      console.log('Failed to post.');
    }  
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostForm);