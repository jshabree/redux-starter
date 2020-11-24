let book = { title: "Little Women "};

function publish(book) {
    book.isPublished= true;     // immutable
}

publish(book);
console.log(book);
