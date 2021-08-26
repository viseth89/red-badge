"use strict";
// type this allows use to add to the type system
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 4] = "blue";
    Color[Color["yellow"] = 5] = "yellow"; // 2
})(Color || (Color = {}));
// color="red"
console.log('enum below');
console.log(Color.red);
console.log(Color.blue);
function addTwoThings(x, y) {
    return x + y;
}
let z = addTwoThings("2", "5");
// Guard .. Type Guards
if (typeof z == "string") {
    z.toUpperCase();
}
// [1,2,3, "Hello"] // Array<number> or number
let myObj;
myObj = [1, 2, 3];
myObj = { fname: "Viseth" };
if (myObj instanceof Array) {
    console.log(myObj);
}
else {
    let values = Object.values(myObj);
    console.log(values);
}
// console.log(typeof myObj)
// interface
