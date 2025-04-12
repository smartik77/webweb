function createGreetable(str) {
    // Создаём обёртку над строкой
    const result = new String(str)
    
    // Сначала делаем greetablePrototype наследником String.prototype
    Object.setPrototypeOf(greetablePrototype, String.prototype)
    
    // Затем делаем result наследником greetablePrototype
    return Object.setPrototypeOf(result, greetablePrototype)
}

// Создаём объект-прототип с методом greet
const greetablePrototype = {
    greet(greeting) {
        return `${greeting}, ${this}!`  // this ссылается на объект-строку
    }
}

const g = createGreetable('World')
console.log(g.greet('Hello'))
