class Employee {
  showName() {
    console.log(this.name)
  }

  showSalary() {
    console.log(this.salary)
  }
}

let employee = new Employee()

employee.name = "Алексей Смирнов"
employee.salary = 75000

employee.showName()
employee.showSalary()
