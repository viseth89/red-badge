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
    favColor: "Red",
    what: 'huh'
};
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
console.log(count);
// Tuple
function sendMessage() {
    return ["success", {
            fname: "first",
            lname: "last",
            grade: 12
        }];
}
var _a = sendMessage(), statusResult = _a[0], data = _a[1];
if (statusResult == 'success')
    console.log(data);
