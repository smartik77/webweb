function getPersonInfo(name, age) {
  let status
  if (age <= 17) status = 'ребенок'
  else if (age <= 30) status = 'молодой'
  else if (age <= 55) status = 'зрелый'
  else status = 'старый'
  
  return `${name} имеет возраст ${age}, и он ${status}`
}

console.log(getPersonInfo('2hollis', 192))
