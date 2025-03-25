function createGreetable(str) {
    const result = new String(str)
    Object.setPrototypeOf(greetablePrototype, String.prototype)
    return Object.setPrototypeOf(result, greetablePrototype)
}

const greetablePrototype = {
        greet(greeting) {
            return `${greeting}, ${this}!`
        }
}

const g = createGreetable('World')
console.log(g.greet('Hello'))
