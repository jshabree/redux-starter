function add(a) {
    return function(b) {
        return a + b;

    };
}

console.log(add(1)(5));  // add(1,5)
