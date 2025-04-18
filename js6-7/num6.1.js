class Employee {
  show(name, salary) {
    return `Сотрудник: ${name}, Зарплата: ${salary}`
  }
}

let employee = new Employee()

console.log(employee.show("Иван Иванов", 50000))

console.log(employee.show("Мария Петрова", 65000))
