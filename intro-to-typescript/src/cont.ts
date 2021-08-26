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

// type

// interface