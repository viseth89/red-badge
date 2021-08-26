import { json } from "sequelize/types";

console.log('Greetings')

let count = 5
count = 10
// count is a 'type' number

const fname = "Justin"
// const's type is a literal

let testing: number;

testing = 5

console.log(add(6, testing))

type Student =  {
    fname: string
    lname: string
    grade: number
}

let student = {
    fname:'ROTER',
    lname:'Anderson',
    grade:12,
    favColor: "Red",
    what: 'huh'
}


function toString(student: Student): string{
    return JSON.stringify(student)
}

const toStringArrow = (student: Student): string => {
    return JSON.stringify(student)
}

function add(x: number, y: number): number {
    let result = x+y
    return result
}

console.log(toString(student))
console.log(count)


// ANY & VOID

// Union
type Status = "success" | "failure"
type ServerResponse = Student | Error

// Tuple

function sendMessage(): [status: Status, response: ServerResponse]
{
    return["success", {
        fname:"first",
        lname:"last",
        grade: 12
    }]
}

const [statusResult, data] = sendMessage()
if (statusResult == 'success')
    console.log(data)