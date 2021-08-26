"use strict";
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
// type
// interface
