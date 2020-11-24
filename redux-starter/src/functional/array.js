const numbers = [ 1, 2, 3];

// adding elements to the array

// adding 4 between 1 and 2

const indexOf2 = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, indexOf2),
    4,
    ...numbers.slice(indexOf2)
];

console.log(added);

// removing an element

const removed = numbers.filter(n => n!==2)
console.log(removed);

// updating the array
// replacing 2 with 20

const updated = numbers.map(n => n==2 ? 20 : n)
console.log(updated);

 

