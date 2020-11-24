let fp= require('lodash/fp');

const _ = require("lodash")

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrap = type  => str =>  ('<' + type +  '>'+ str + '</' + type + '>')
const toLowerCase = str => str.toLowerCase();

const transform = fp.pipe(trim, toLowerCase, wrap("div"));

console.log(transform(input));

