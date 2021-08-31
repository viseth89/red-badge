
interface Point {
    calc(): Number
}
interface Point {
    something(): Number
}

// With interfaces you can add them to class with the keyword
// implements

type message = "success"| "failure"
interface Send {
    send(): message
}


class Mail implements Send {
    data
    constructor(data: string){
        this.data = data
    }
    send(){
        let returnValue: message = "success"
        return returnValue
    }
}
class Email implements Send {
    data
    constructor(data: string){
        this.data = data
    }
    send(){
        let returnValue: message = "success"
        return returnValue
    }
}



const messages = [new Mail("Hello from snail mail"), new Email("Hello can you see me in the inbox")]
messages.forEach(m => m.send())
let email = new Mail("Hey!")
email.send()