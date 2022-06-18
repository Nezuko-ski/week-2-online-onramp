function increment(arr, value) {
    Object.keys(val).forEach(key => {
        return [val[key] + value]
    })
    //return [{val: arr[0].val + value}, {val: arr[1].val + value}, {val: arr[2].val + value}]
   
}


console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5))
module.exports = increment
