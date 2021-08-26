"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Greetings');
var count = 5;
count = 10;
// count is a 'type' number
var fname = "Justin";
// const's type is a literal
var testing;
testing = 5;
console.log(add(6, testing));
var student = {
    fname: 'ROTER',
    lname: 'Anderson',
    grade: 12,
};
var sqr = function (x) { return x * x; };
function toString(student) {
    return JSON.stringify(student);
}
var toStringArrow = function (student) {
    return JSON.stringify(student);
};
function add(x, y) {
    var result = x + y;
    return result;
}
console.log(toString(student));
// Tuple
function sendMessage() {
    var tmp = Math.round((Math.random()));
    console.log(tmp);
    if (tmp == 1) {
        return ["success", {
                fname: "viseth",
                lname: "sen",
                grade: 12
            }];
    }
    else {
        return ["failure", "Something went wrong"];
    }
}
for (var i = 0; i < 10; i++) {
    var _a = sendMessage(), statusResult = _a[0], data = _a[1];
    console.log(data);
}
