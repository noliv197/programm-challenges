function miniMaxSum(arr) {
    // Write your code here
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let minSum=arr.reduce((a,b)=>a+b,0) - max
    let maxSum=arr.reduce((a,b)=>a+b,0) -min
    console.log(`${minSum} ${maxSum}`)
}

miniMaxSum([1,3,5,7,9])
