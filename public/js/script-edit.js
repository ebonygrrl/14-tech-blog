const editPostForm = async (e) => {          
    e.preventDefault();      

    const postId = document.querySelector('.update').dataset.post;
  
    const formData = new FormData(e.currentTarget);
  
    const result = await fetch(`/api/post/${postId}`, {
      method: 'PUT',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(result.json());
  
    if (result.ok) {
      console.log('200');
      //document.location.replace('/');
    } else {
        console.log('Failed to update post.');
    }  
};

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPostForm); 