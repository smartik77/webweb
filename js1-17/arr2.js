function hasOdd(numbers) {
  return numbers.some(num => num % 2 !== 0)
}

console.log(hasOdd([1, 2, 3]))
console.log(hasOdd([2, 4, 6]))
