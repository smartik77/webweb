function getGender(gender) {
  if (gender === 'M') return 'Ваш пол мужской'
  if (gender === 'F') return 'Ваш пол женский'
  return 'Ваш пол не определён'
}

console.log(getGender('M'))
console.log(getGender('F'))
console.log(getGender('X'))
