function calculateAverage(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  const average = sum / numbers.length
  return Math.round(average * 10) / 10
}

console.log(calculateAverage([1, 2, 3, 4, 5]))
console.log(calculateAverage([10, 20, 30]))
