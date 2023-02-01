var plusOne = function(digits) {
    let lastIndex = digits.length - 1
    let last = digits[lastIndex] 
    if(last == 9){
        digits[lastIndex] = 0
        for (let i = lastIndex - 1; digits.length;i--){
            if(digits[i] == 9){
                digits[i] = 0
            }
            else if(digits[i] == undefined){
                digits.splice(0,0,1)
                break
            }
            else {
                digits[i] = digits[i] + 1
                break
            }
        }
    }
    else digits[lastIndex] = last + 1
    return digits
};

console.log(`
Original: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
Resultado: ${plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])}
Esperado:  6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4

Original: [9,9,9,9]
Resultado: ${plusOne([9,9,9,9])}
Esperado:  1,0,0,0,0

`)

    // let convert = digits.join('')
    // console.log(convert)
    // let increment = String(parseInt(convert) + 1)
    // console.log(increment)
    // let result = []
    // for(let i=0; i<increment.length;i++){
    //     result.push(parseInt(increment[i]))
    // }