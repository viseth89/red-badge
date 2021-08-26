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
var z = addTwoThings("2", "5");
// Guard .. Type Guards
if (typeof z == "string") {
    z.toUpperCase();
}
// [1,2,3, "Hello"] // Array<number> or number
var myObj;
myObj = [1, 2, 3];
if (myObj instanceof Array) {
    myObj.map(function () { });
}
else {
    var keys = Object.keys(myObj);
    console.log(keys);
}
console.log(typeof myObj);
// interface
