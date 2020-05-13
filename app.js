var titles = document.getElementsByClassName('title');

//Check wether HTML element titles is an array or not (Display true or fasle on console).
console.log(Array.isArray(titles));

//Convert the HTML collection(titles) to an array and then display if true or false on console.
console.log(Array.isArray(Array.from(titles)));

//Alternative way to cycle through an HTML collection rather than using for loop.
Array.from(titles).forEach(function (item) {
    console.log(item);
})