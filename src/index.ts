import {name, age, getUyhoName} from "./uhyo.js";
import { increment } from "./counters.js";
import "./foo.js";
import "./bar.js";
import uhyoage from "./uhyoage.js";
import {Animal, tama} from "./animals.js";

const greeting: string = "Hello"; //再代入不可
let target: string = "world"; //再代入可能

console.log(greeting+target)

const width1 = 5;
const width2 = 8;
const height: number = 3;

const area = (width1 + width2) * height / 2

console.log(area);

console.log(name + age);

console.log(getUyhoName());

console.log(increment());
console.log(increment());
console.log(increment());

console.log(uhyoage);

const dog: Animal = {
    species: "bbbbbbbbbb",
    age: 2,
}

console.log(tama, dog);
