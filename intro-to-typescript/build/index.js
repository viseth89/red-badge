"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Greetings');
let count = 5;
count = 10;
// count is a 'type' number
const fname = "Justin";
// const's type is a literal
let testing;
testing = 5;
console.log(add(6, testing));
let student = {
    fname: 'ROTER',
    lname: 'Anderson',
    grade: 12,
};
let sqr = (x) => x * x;
function toString(student) {
    return JSON.stringify(student);
}
const toStringArrow = (student) => {
    return JSON.stringify(student);
};
function add(x, y) {
    let result = x + y;
    return result;
}
console.log(toString(student));
// Tuple
function sendMessage() {
    let tmp = Math.round((Math.random()));
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
for (let i = 0; i < 10; i++) {
    let [statusResult, data] = sendMessage();
    console.log(data);
}
