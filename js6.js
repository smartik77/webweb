// Принимает базовый класс и возвращает новый класс с методом greet
const withGreeter = (base) => class extends base {
    greet(greeting) {
        // Метод использует свойство name из родительского класса
        return `${greeting}, ${this.name}!`
    }
}

// Базовый класс Employee
class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary 
    }
    
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
    }
}
 
// Создаем расширенную версию Employee с методом greet
const GreetableEmployee = withGreeter(Employee)

// Создаем объект расширенного класса
const harry = new GreetableEmployee('Harry Smith', 90000)

// Вызываем новый метод greet
console.log(harry.greet('Hello'))
