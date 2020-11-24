let pd = require("immer");
// const _ = require("immutable")


let book = { title: "Little Women"};

function publish(book) {
    pd.produce(book, draft => { // book won't be modified
        draft.isPublished = true;
    });
}

book = publish(book);

console.log(book);