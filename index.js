const calculate = (arr) => {
  let num1
  let num2
  let operator = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '' && (!isNaN(arr[i]) || arr[i] === null) && !num1) {
      num1 = Number(arr[i])
    } else if (arr[i] !== '' && (!isNaN(arr[i]) || arr[i] === null)) {
      num2 = Number(arr[i])
    } else {
      switch (arr[i]) {
        case '*':
          operator = '*'
          break
        case '/':
          operator = '/'
          break
        case '+':
          operator = '+'
          break
        case '-':
          operator = '-'
          break
      }
    }
  }

  return operator ? solveEquation(num1, num2, operator) : NaN
}

const solveEquation = (num1, num2, operator) => {
  let total

  switch (operator) {
    case '*':
      total = num1 * num2
      break
    case '/':
      total = num1 / num2
      break
    case '+':
      total = num1 + num2
      break
    default:
      total = num1 - num2
      break
  }

  return total
}

module.exports = calculate