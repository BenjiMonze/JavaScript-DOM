const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

//This querySelector only ever returns one element even if there are more than one.
//It'll retrun the fist.
var books = document.querySelector('#book-list li .name');
// console.log(books);

//The querySelectorAll would return a collection of elements.
books = document.querySelectorAll('#book-list li .name');

console.log(books);