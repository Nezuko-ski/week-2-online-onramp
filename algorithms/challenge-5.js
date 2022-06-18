function arraySum(arr1, arr2) {
    let newArr = []
    let myArr = []
    let nezukArr = []
    let x = arr1.length;
        y = arr2.length;
            
            const firstArr = arr1.slice(0, y)
           for(let i = 0; i < firstArr.length; i++) {
                myArr.push(firstArr[i] + arr2[i])
            }
            const subArr = arr1.slice(y)
            for(let i = 0; i < subArr.length; i++) {
                nezukArr.push(subArr[i] + arr2[i]) 
            }
         //   THIS IS JUST DEPRESSING. SO TIRED
       newArr = myArr.concat(nezukArr) 
       
     /*  for(let i = 0; i < Math.max(x, y); i++) {
          newArr.push((arr1[i] || 0) + (arr2[i] || arr2[0]))
       }*/
     
    
        return newArr
    
}
console.log(arraySum([10,20,30,40,50], [20,40,60]))

module.exports = arraySum
