function moveFirstToEnd1(arr) {
  return arr.slice(1).concat(arr[0])
}

function moveFirstToEnd2([first, ...last]) {
  return [...last, first]
}

console.log(moveFirstToEnd1([1, 2, 3, 4, 5]))
console.log(moveFirstToEnd2([1, 2, 3, 4, 5]))
