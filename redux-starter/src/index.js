// import { pipe } from "lodash/fp"

let fp= require('lodash/fp');

// import _ from 'lodash';

const _ = require("lodash")

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrap = (type, str) => '<${type}>${str}</${type}>';
const toLowerCase = str => str.toLowerCase();

const transform= fp.pipe(trim, toLowerCase, wrap);

console.log(transform(input));