function diagonalDifference(arr) {
    // Write your code here
    let d1 = []
    let d2 = []
    let n = arr.length
    let rev = n-1
    for(let i =0;i<n;i++){
        d1.push(arr[i][i])
        d2.push(arr[i][rev])
        rev--
    }
    d1 = d1.reduce((a,b)=>a+b,0)
    d2 = d2.reduce((a,b)=>a+b,0)
    return Math.abs(d1-d2)
}

diagonalDifference([
    [11, 2, 4],
    [4, 5, 6]
    [10, 8, -12]
])