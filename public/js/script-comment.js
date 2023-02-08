const addCommentForm = async (e) => {          
    e.preventDefault();    

    const newWindow = window.location.pathname;
    const path = newWindow.split('/').pop();
    console.log(path);
  
    const addComment = document.querySelector('#comment').value;
  
    const result = await fetch('/api/comment/new', {
      method: 'POST',
      body: JSON.stringify({post_id:path, comment:addComment}),
      headers: { 'Content-Type': 'application/json' }
    });

    const response = await result.json();
  
    if (result.ok) {
      document.location.replace('/');
    } else {
      console.log(response);
    }  
};

document
  .querySelector('.add-comment-form')
  .addEventListener('submit', addCommentForm);