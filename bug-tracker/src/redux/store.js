let reducer = require("./reducer");
const _ = require("./reducer")


let createStore = require("redux");

const store = createStore.createStore(reducer.reducer)