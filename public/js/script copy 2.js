const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');
const newPostForm = document.querySelector('.new-post-form');
const editPostForm = document.querySelector('.edit-post-form');
const addCommentForm = document.querySelector('.add-comment-form');

signupForm.addEventListener('submit', async (e) => {          
    e.preventDefault();
  
    const formData = new FormData(signupForm);
    const jsonFormData = JSON.stringify(Object.fromEntries(formData));
  
    const result = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      header: { 'Content-Type': 'application/json' }
    });
  
    if (result.ok) {
      console.log('200');
      //document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }  
});

// loginForm.addEventListener('submit', async (e) => {          
//     e.preventDefault();
  
//     const formData = new FormData(loginForm);
  
//     const result = await fetch('/api/user/signin', {
//       method: 'POST',
//       body: formData,
//       header: { 'Content-Type': 'multipart/form-data' }
//     });
  
//     if (result.ok) {
//       console.log('200');
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }  
// });

// newPostForm.addEventListener('submit', async (e) => {          
//     e.preventDefault();
  
//     const formData = new FormData(newPostForm);
  
//     const result = await fetch('/api/post/new', {
//       method: 'POST',
//       body: formData,
//       header: { 'Content-Type': 'multipart/form-data' }
//     });
  
//     if (result.ok) {
//       console.log('200');
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }  
// });

// editPostForm.addEventListener('submit', async (e) => {          
//     e.preventDefault();
  
//     const formData = new FormData(editPostForm);
  
//     const result = await fetch('/api/post/edit', {
//       method: 'POST',
//       body: formData,
//       header: { 'Content-Type': 'multipart/form-data' }
//     });
  
//     if (result.ok) {
//       console.log('200');
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }  
// });

// addCommentForm.addEventListener('submit', async (e) => {          
//     e.preventDefault();
  
//     const formData = new FormData(addCommentForm);
  
//     const result = await fetch('/api/comment/new', {
//       method: 'POST',
//       body: formData,
//       header: { 'Content-Type': 'multipart/form-data' }
//     });
  
//     if (result.ok) {
//       console.log('200');
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }  
// });