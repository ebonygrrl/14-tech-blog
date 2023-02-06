const newPostForm = async (e) => {          
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    const result = await fetch('/api/dashboard/new', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (result.ok) {
      console.log('200');
      //document.location.replace('/');
    } else {
      console.log('Failed to post.');
    }  
};
    
// const editPostForm = async (e) => {          
//     e.preventDefault();
  
//     const formData = new FormData(e.currentTarget);
  
//     const result = await fetch('/api/dashboard/:id/update', {
//       method: 'POST',
//       body: JSON.stringify(Object.fromEntries(formData)),
//       headers: { 'Content-Type': 'application/json' }
//     });
  
//     if (result.ok) {
//       console.log('200');
//       //document.location.replace('/');
//     } else {
//         console.log('Failed to update post.');
//     }  
// };

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostForm);

// document
//     .querySelector('.edit-post-form')
//     .addEventListener('submit', editPostForm); 