function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

console.log("До вызова функции:")
console.log(menu)

multiplyNumeric(menu)

console.log("После вызова функции:")
console.log(menu)
