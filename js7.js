// Принимает базовый класс и возвращает новый класс с методом greet
const withGreeter = (base) => class extends base {
    greet(greeting) {
        // Метод использует свойство name из родительского класса
        return `${greeting}, ${this.name}!`
    }
}

// Базовый класс Employee
class Employee {
    #salary = 0               // Приватное поле

    constructor(name, salary) {
        this.name = name
        this.#salary = salary
    }

    raiseSalary(percent) {
        this.#salary *= 1 + percent / 100
    }

    // Геттер для чтения зарплаты
    get salary() {
        return this.#salary
    }
}

// Создаем расширенную версию Employee с добавленным методом greet
const GreetableEmployee = withGreeter(Employee)

// Создаем объект расширенного класса
const e = new GreetableEmployee('Harry Smith', 90000)

// Вызываем новый метод greet
console.log(e.greet('Hello'))
