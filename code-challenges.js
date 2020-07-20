// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = (num) => {
  let a = 0
  let b = 1
  let fibonacci = []
  for(let i=0; i<num; i++){
    fibonacci.push(b)
    let c = a + b
    a = b
    b = c
  }
  return fibonacci
}
// console.log(getFib(10))


const getFibRec = (num) => {
  if(num === 1){
    return [1, 1]
  } else {
    let fibArray = getFibRec(num - 1)
    console.log("num", num)
    console.log("fibarray", fibArray)
    return[...fibArray, fibArray[num-1] + fibArray[num-2]]
  }
}
console.log(getFibRec(10))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// get just numbers
// get just odd numbers
// sort from least to greatest

// console.log(fullArr1.sort())

const getJustNums = (array) => {
  let numsArray = array.filter(value => {
    return typeof value === "number" && value % 2 !== 0
  })
  return numsArray.sort((a, b) => (a - b))
}
// console.log(getJustNums(fullArr1))
// console.log(getJustNums(fullArr2))



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// determine if the word odd or even num of characters
// odd - get the middle letter
// even - two middles letters


const getMiddle2 = (string) => {
  let oddCoreLetter = string.length/2
  let evenCoreLetter = string.length/2 - 1
  console.log(oddCoreLetter)
  if(string.length%2 !== 0){
    return string.charAt(oddCoreLetter)
  } else {
    return string.charAt(evenCoreLetter) + string.charAt(oddCoreLetter)
  }
}
// console.log(getMiddle2(middleLetters1))
// console.log(getMiddle2(middleLetters2))

const getMiddle = (string) => {
  let tempArr = string.split("")
  if(string.length%2 !== 0){
    for(let i=1; i<string.length; i=i+2){
      tempArr.shift()
      tempArr.pop()
    }
    return tempArr.join("")
  } else if(string.length%2 === 0){
    for(let i=2; i<string.length; i=i+2){
      tempArr.shift()
      tempArr.pop()
    }
    return tempArr.join("")
  }
}
// console.log(getMiddle(middleLetters1))
// console.log(getMiddle(middleLetters2))
// console.log(getMiddle("at"))




// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere{
  constructor(radius){
    this.radius = radius
    this.area = 0
  }
  areaSphere(){
    return this.area = 4 * Math.PI * (Math.pow(this.radius, 2))
  }
}
const sphere1 = new Sphere(35)
// console.log(sphere1.areaSphere())
const sphere2 = new Sphere(5)
// console.log(sphere2.areaSphere())
const sphere3 = new Sphere(10)
// console.log(sphere3.areaSphere())

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []


const accSum2 = (array) => {
  let currentSum = 0
  return array.map(value => {
    return currentSum += value
  })
}
// console.log(accSum2(numbersToAdd1))
// console.log(accSum2(numbersToAdd2))
// console.log(accSum2(numbersToAdd3))


const accSum = (array) => {
  let currentSum
  if(array.length > 0){
    currentSum = 0
    let newArr = array.map(value => {
      currentSum += value
      return currentSum
    })
    return newArr
  } else {
    return array.map(value => {
      return currentSum + value
    })
  }
}
// console.log(accSum(numbersToAdd1))
// console.log(accSum(numbersToAdd2))
// console.log(accSum(numbersToAdd3))
