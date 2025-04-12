function filterMultiplesOfFive(numbers) {
  const result = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      result.push(numbers[i])
    }
  }
  return result
}

console.log(filterMultiplesOfFive([1, 2, 5, 12, 15, 21]))
