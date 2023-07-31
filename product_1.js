function search() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.trim().toLowerCase();
    // Implement your search functionality here
    console.log('Searching for:', searchText);
  }
  
  function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;
  
      const commentsContainer = document.getElementById('comments');
      commentsContainer.appendChild(commentElement);
  
      commentInput.value = '';
    }
  }
  