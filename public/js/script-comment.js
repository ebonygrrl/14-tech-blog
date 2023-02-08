const addCommentForm = async (e) => {          
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    const result = await fetch('/api/comment/new', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    });

    const response = await result.json();

    const newWindow = window.location.pathname;
    const path = newWindow.split('/', 2).pop();
    console.log(path);
  
    if (result.ok) {
      document.location.replace('/');
    } else {
      console.log(response);
    }  
};

document
  .querySelector('.add-comment-form')
  .addEventListener('submit', addCommentForm);