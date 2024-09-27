import {name, age} from "./uhyo.js";

const greeting: string = "Hello"; //再代入不可
let target: string = "world"; //再代入可能

console.log(greeting+target)

const width1 = 5;
const width2 = 8;
const height: number = 3;

const area = (width1 + width2) * height / 2

console.log(area)

console.log(name + age)
