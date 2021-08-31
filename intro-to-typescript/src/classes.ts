
interface Point {
    calc(): Number
}
interface Point {
    something(): number
}

// With interfaces you can add them to class with the keyword
// implements

type message = "success"| "failure"
interface Send {
    send(): message
}

// getMessage

interface GetMessage{
    myMessage(): String
}

class Mail implements Send {
    data
    constructor(data: string){
        this.data = data
    }
    send(): message{
        let returnValue: message = "success"
        return returnValue
    }
}
class Email implements Send, GetMessage {
    data
    constructor(data: string){
        this.data = data
    }
    send(): message{
        let returnValue: message = "success"
        return returnValue
    }

    myMessage(): string {
        return this.data
    }
}



const messages = [new Mail("Hello from snail mail"), new Email("Hello can you see me in the inbox")]
messages.forEach(m => m.send())
let email = new Email("Hey!")
console.log(email.myMessage())