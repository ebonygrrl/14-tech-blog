const addCommentForm = document.querySelector('.add-comment-form');

addCommentForm.addEventListener('submit', async (e) => {          
    e.preventDefault();
  
    const formData = new FormData(addCommentForm);
  
    const result = await fetch('/api/comment/new', {
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