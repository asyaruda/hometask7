function isPowerOfThree(num) {
  while (num % 3 === 0) {
    num /= 3;
  }
  return num === 1;
}
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(13))
console.log(isPowerOfThree(81))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(15))