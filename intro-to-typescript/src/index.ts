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

let student:Student = {
    fname:'Andy',
    lname:'Anderson',
    grade:12,
    favColor: "Red",
    what: 'huh'
}


function toString(student: Student
    ){
    return JSON.stringify(student)
}

function add(x: number, y: number): number {
    let result = x+y
    return result
}

console.log(toString(student))
console.log(count)