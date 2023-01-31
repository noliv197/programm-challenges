function plusMinus(arr) {
    // Write your code here
    let positive = arr.filter(n=> n >0).length
    let negative = arr.filter(n=> n <0).length
    let zero = arr.filter(n=> n ===0).length
    console.log(positive/arr.length)
    console.log(negative/arr.length)
    console.log(zero/arr.length) 
}

plusMinus([1,1,0,-1,-1])