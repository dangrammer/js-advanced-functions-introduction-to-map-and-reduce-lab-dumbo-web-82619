const mapToNegativize = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * -1)
  }
  return result
}

const mapToNoChange = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i])
  }
  return result
}

const mapToDouble = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result
}

const mapToSquare = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2)
  }
  return result
}

const reduceToTotal = (arr, init = 0) => {
  let result = init
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

const reduceToAllTrue = (arr) => {
  let result
  for (let i = 0; i < arr.length; i++) {
    result = !arr[i] ? false : true
  }
  return result
}

const reduceToAnyTrue = (arr) => {
  let result
  for (let i = 0; i < arr.length; i++) {
    result = !!arr[i] ? true : false
  }
  return result
}

