function timeBasedGreeting(name) {
  const hour = new Date().getHours()
  let greeting
  
  if (hour >= 5 && hour < 12) greeting = 'Доброе утро,'
  else if (hour >= 12 && hour < 18) greeting = 'Добрый день,'
  else if (hour >= 18 && hour < 23) greeting = 'Добрый вечер,'
  else greeting = 'Доброй ночи,'
  
  return `${greeting} ${name}`
}

console.log(timeBasedGreeting('2hollis'))
