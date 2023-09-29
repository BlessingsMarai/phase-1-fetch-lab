function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response status is OK 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Convert the response to JSON
      return response.json();
    })
    .then(data => {
      // Call the renderBooks function with the JSON data
      renderBooks(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('There was a problem with the fetch operation:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);