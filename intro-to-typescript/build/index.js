"use strict";
console.log('Greetings');
var count = 5;
count = 10;
// count is a 'type' number
var fname = "Justin";
// const's type is a literal
var testing;
testing = 5;
console.log(add(6, testing));
var Student;
var student = {
    fname: 'Andy',
    lname: 'Anderson',
    grade: 12
};
function toString(student) {
    return JSON.stringify(student);
}
function add(x, y) {
    var result = x + y;
    return result;
}
console.log(count);
