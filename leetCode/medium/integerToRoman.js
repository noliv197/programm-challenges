var intToRoman = function(num) {
    let roman = {"1":'I',"5":'V',"10":'X',"50":'L',"100":'C',"500":'D',"1000":'M'}
    let arr = String(num).match(/.{1}/g)
    let size = String(num).length
    let u = ''
    let d = ''
    let c = ''
    let m = ''
    
    if(arr[size-1] == 4) u = roman["1"] + roman["5"] 
    else if(arr[size-1] == 9) u = roman["1"] + roman["10"]
    else if(arr[size-1] <= 3) u = roman["1"].repeat(arr[size-1])
    else u = roman["5"] + roman["1"].repeat(arr[size-1]-5)

    if(size >= 2){
      if(arr[size-2] == 4) d = roman["10"] + roman["50"] 
      else if(arr[size-2] == 9) d = roman["10"] + roman["100"]
      else if(arr[size-2] <= 3) d = roman["10"].repeat(arr[size-2])
      else d = roman["50"] + roman["10"].repeat(arr[size-2]-5)
    }
    if(size >= 3){
      if(arr[size-3] == 4) c = roman["100"] + roman["500"] 
      else if(arr[size-3] == 9) c = roman["100"] + roman["1000"]
      else if(arr[size-3] <= 3) c = roman["100"].repeat(arr[size-3])
      else c = roman["500"] + roman["100"].repeat(arr[size-3]-5)
    }
    if(size ==4){
      m = roman["1000"].repeat(arr[0])
    }

    return(m+c+d+u)
};

console.log(`
Input:  3
Output:  ${intToRoman(3)}
Expected: III

Input:  58
Output:  ${intToRoman(58)}
Expected: LVIII

Input:  1997
Output:  ${intToRoman(1994)}
Expected: MCMXCIV
`)