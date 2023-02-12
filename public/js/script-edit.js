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
        document.location.replace('/dashboard');
    } else {
        console.log('Failed to update post.');
    }  
};

const deletePost = async (e) => {          
    e.preventDefault();      

    const postId = document.querySelector('.update').dataset.post;
  
    const result = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json' }
    });

    console.log(result);
  
    if (result.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log('Delete failed.');
    }  
};

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPostForm); 

document
    .querySelector('#delete-post')
    .addEventListener('click', deletePost);