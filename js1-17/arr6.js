function formatEmployees(employees) {
  const result = []
  
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i]
    const str = `Имя: ${employee.name}, возраст: ${employee.age}`
    result.push(str)
  }
  
  return result
}

const arr = [
  {name: 'Иван', age: 23},
  {name: 'Петр', age: 30},
  {name: 'Света', age: 25}
]

console.log(formatEmployees(arr))
