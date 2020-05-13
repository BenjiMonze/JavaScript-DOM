var books = document.querySelectorAll('#book-list li .name');

//Update or change text content of HTML element.
Array.from(books).forEach(function (book) {
    book.textContent += ' (Book Title)';
});

// Update or change HTML element.
const booklist = document.querySelector('#book-list');
booklist.innerHTML = '<h2>Books and more books</h2>';
booklist.innerHTML += '<p>This is how you add HTML</p>';