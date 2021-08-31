// Basic Class

class Animal {
    // Class Properties
    // Constructor Function
    constructor(name, legs){
        this.name = name
        this.legs = legs
    }
    // Methods
    // Arrow function!!! we lose this
    // Non fat arrow function
    speak(){
        console.log(this.name)
    } 

}

class Tiger extends Animal {
    _password = 42
    constructor(name, legs, isDanger){
        super(name,legs)
        this.isDanger = isDanger
    }

    // getters
    get password () {
        return this._password
    }

    set password (n){
        if(typeof n !== "number")
            this._password = n
    }
}

let tiger = new Tiger('bengal', 4, true)
console.log(tiger)

// Create an instance of a class

let dog = new Animal("lab", 4)
let cat = new Animal("ragdoll", 4)
cat.legs
cat.name
// cat.speak()
// console.log('viseth')
// console.log(dog, cat)
// console.log(dog.name, cat.legs)
// console.log(dog.name, cat.name)

let numbers = [1,2,4]

class Template {
    constructor(n){
        this.value = n
    }
}

let tNumbers = numbers.map(n => new Template(n))
console.log(tNumbers)