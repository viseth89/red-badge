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
let myObj: Array<any> | object

myObj = [1,2,3]
if(myObj instanceof Array) {
    myObj.map(() => {})
} else {
    let keys = Object.keys(myObj)
    console.log(keys)
}

console.log(typeof myObj)
// interface