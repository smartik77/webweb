function allEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return false
    }
  }
  return true
}

console.log(allEven([2, 4, 6]))
console.log(allEven([2, 3, 4]))
