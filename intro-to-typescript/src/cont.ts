// type this allows use to add to the type system


type Year = string | number

enum Color{
    "red", // 0
    'blue' = 4, // 1
    'yellow' // 2
} 



// color="red"
console.log('enum below')
console.log(Color.red)
console.log(Color.blue)

type Car = {
    year: Year,
    color: Color
}

type addInput = number | string
function addTwoThings(x: any, y: any): string | number
{
    return x + y
}

let z = addTwoThings("2", "5")
// Guard .. Type Guards

if (typeof z == "string"){
    z.toUpperCase()
}
// [1,2,3, "Hello"] // Array<number> or number
let myObj: any[] | object

myObj = [1,2,3]
myObj = {fname: "Viseth"}
if(myObj instanceof Array) {
    console.log(myObj)
} else {
    let values = Object.values(myObj)
    console.log(values)
}

// console.log(typeof myObj)
// interface