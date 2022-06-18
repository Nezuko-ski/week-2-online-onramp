function withdraw(amount) {
    return [Math.floor(amount / 100), Math.floor(amount % 100 / 50), Math.floor(amount % 100 % 50 / 20)] 
}

console.log(withdraw(370))

module.exports = withdraw