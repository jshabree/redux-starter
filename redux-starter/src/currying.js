// how do we change two parameters, so we end up with one?
function add(a) {
    return function(b) {
        return a + b;

    };
}

const addTwo = a => b => a + b; // (a , b) => a + b
console.log(add(1)(5));  // add(1 , 5)
console.log(addTwo(1)(5));
