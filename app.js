const bookList = document.querySelector("#book-list");

console.log("book-lsit next sibling is:", bookList.nextSibling);
console.log("book-lsit next element sibling is:", bookList.nextElementSibling);

console.log("book-lsit previoius sibling is:", bookList.previousSibling);
console.log("book-lsit previoius element sibling is:", bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else';