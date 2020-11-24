let map = require("immutable");
const _ = require("immutable")


let book = map.Map({ title: "Little Women"});

function publish(book) {
    return book.set("isPublished", true);    
}

book = publish(book);

console.log(book.toJS());