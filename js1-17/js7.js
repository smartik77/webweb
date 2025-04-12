function printNumbersWithStatus() {
  for (let i = 1; i <= 100; i++) {
    let status
    if (i <= 17) status = 'ребенок'
    else if (i <= 30) status = 'молодой'
    else if (i <= 55) status = 'зрелый'
    else status = 'старый'
    
    console.log(`${i} - ${status}`)
  }
}

printNumbersWithStatus()
