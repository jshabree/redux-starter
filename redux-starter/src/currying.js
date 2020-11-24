function add(a) {
    return function(b) {
        return a + b;

    };
}

const addOne = add(1);
console.log(addOne(5))