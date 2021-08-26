// Basic Class

class Animal {
    // Class Properties
    // Constructor Function
    constructor(name, legs){
        this.name = name
        this.legs = legs
    }
    // Methods
}

// Create an instance of a class

let dog = new Animal("lab", 4)
let cat = new Animal("ragdoll", 4)

console.log(dog, cat)
console.log(dog.name, cat.legs)
console.log(dog.name, cat.name)

let numbers = [1,2,4]

class Template {
    constructor(n){
        this.value = n
    }
}

let tNumbers = numbers.map(n => new Template(n))
console.log(tNumbers)