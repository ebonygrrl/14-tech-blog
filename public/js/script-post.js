const newPostForm = document.querySelector('.new-post-form');
const editPostForm = document.querySelector('.edit-post-form');

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