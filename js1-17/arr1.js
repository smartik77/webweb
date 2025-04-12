function allEven(numbers) {
  return numbers.every(num => num % 2 === 0)
}

console.log(allEven([2, 4, 6]))
console.log(allEven([2, 3, 4]))
