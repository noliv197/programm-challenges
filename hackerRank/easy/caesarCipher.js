function caesarCipher(s, k) {
    // Write your code here
    let result  = ''
    let charCode
    for(let i = 0 ; i<s.length;i++){
        charCode = s.charCodeAt(i)
        result = result + encrypt(charCode, s[i], k)
    }
    return result
}
function encrypt(charCode, char, k){
    let encrypt
    if(k > 25) k = k - (26 * (Math.floor(k / 25)))
    if(charCode >=97 && charCode <=122){
        if(charCode+k > 122 ) charCode = 96  + (charCode - 122)
        encrypt = String.fromCharCode(charCode+k)    
    }
    //////////////////////////////////////////////
     else if(charCode >=65 && charCode <=90){
        if(charCode+k > 90) charCode = 64 + (charCode - 90)
        encrypt = String.fromCharCode(charCode+k)
     }
    ///////////////////////////////////////////////
     else{
        encrypt = char
     }
     return encrypt
}

console.log(`
Original: 1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M
Result:   ${caesarCipher("1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M",27)}
Expected: 1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N`
)

console.log(`
Original: There's-a-starman-waiting-in-the-sky
Result:   ${caesarCipher("There's-a-starman-waiting-in-the-sky",3)}
Expected: Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb`
)

console.log(`
Original: middle-Outz
Result:   ${caesarCipher("middle-Outz",2)}
Expected: okffng-Qwvb`
)