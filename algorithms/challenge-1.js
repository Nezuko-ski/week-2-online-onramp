function missingNumber(numArr) {
    for(let i = 0; i < numArr.length - 1; i++) {
        const x = numArr[i]
        const y = numArr[i + 1]

        if((x + 1) !== y) {
            return x + 1
        }
    }

}

console.log(missingNumber([1, 2, 3, 4, 5, 6, 8]))
module.exports = missingNumber
