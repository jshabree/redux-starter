const person = { 
    name : "John",
    address: {
        country: "USA",
        city: "SFO"
    }
};

// const updated = {...person, name: "Bob"}; // shallow copy

const updated = {   //deep copy
    ...person, 
    address: {
        ...person.address,
        city: "NY"
    },
    name: "Bob"
}; // shallow copy

console.log(person);