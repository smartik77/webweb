const withGreeter = base => class extends base {
     greet(greeting) {
        return `${greeting}, ${this.name}!`
  }
}

class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
    }
}


 
const GreetableEmployee = withGreeter(Employee)
const e = new GreetableEmployee('Harry Smith', 90000)
console.log(e.greet('Hello'))
