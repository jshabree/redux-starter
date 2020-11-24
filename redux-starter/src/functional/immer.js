let pd = require("immer");
// const _ = require("immutable")


let book = { title: "Little Women"};

function publish(book) {
    return pd.produce(book, draft => { // book won't be modified
        draft.isPublished = true;
    });
}

let updated = publish(book);

console.log(book);
console.log(updated);