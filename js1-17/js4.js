function getDayOfWeek(day) {
  const days = [
    'Понедельник', 'Вторник', 'Среда', 
    'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
  ]
  return days[day - 1] || 'Неверный день'
}

console.log(getDayOfWeek(1))
console.log(getDayOfWeek(5))
