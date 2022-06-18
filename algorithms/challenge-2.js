function numSwap(number) {
    let num = `${number}`
    let arr = num.split(' ')
    
    if(num.length % 2 !== 0) {
        return false
    }

   return reverse(Math.floor(num / 10000)).replace(/0/, '') + reverse(Math.floor(num % 10000 / 100)) + reverse(num % 100).replace(/0/, '')
}

function reverse(v) {
  return `${v}`.split('').reverse().join('');
}

module.exports = numSwap

console.log(numSwap(1234))
