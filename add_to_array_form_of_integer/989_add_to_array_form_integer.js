const addToArrayForm = function (num, k) {
  let newNum = bigInt(num.join(''))
  newNum = newNum + BigInt(k)
  newNum = newNum.toString().split('')
  const arrOfNum = newNum.map((str) => Number(str))
  return arrOfNum
}
