function hasOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      return true
    }
  }
  return false
}

console.log(hasOdd([1, 2, 3]))
console.log(hasOdd([2, 4, 6]))
