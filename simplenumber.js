function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

console.log('1', isPrime(1))
console.log('17', isPrime(17))
console.log('21', isPrime(21))
console.log('12', isPrime(12))
console.log('13', isPrime(19))
console.log('19', isPrime(1))
console.log('110', isPrime(110))
console.log('56', isPrime(56))
console.log('2', isPrime(2)) 