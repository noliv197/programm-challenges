var isPalindrome = function(x) {
    let size = String(x).length 
    let right
    let left
    if(size%2 ==0){
        right = String(x).slice(0,size/2) 
        left = String(x).slice(size/2,size) 
    }else{
        right = String(x).slice(0,Math.floor(size/2)) 
        left = String(x).slice(Math.ceil(size/2),size) 
    }
    left = left.split('').reverse().join('')
    if(left === right) return true
    else return false
};

console.log(`
Output:   ${isPalindrome(121)}
Expected: true
`)