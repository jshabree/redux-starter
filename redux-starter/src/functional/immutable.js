let map = require("immutable");
const _ = require("immutable")


let book = map.Map({ title: "Little Women "});

// function publish(book) {
//     book.isPublished= true;     // immutable
// }

// publish(book);

console.log(book.title); // undefined
