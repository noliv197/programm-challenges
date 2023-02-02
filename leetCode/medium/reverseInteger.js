var reverse = function(x) {
    let convert 
    let result
    if(x>0){
        convert = String(x) 
        result =  parseInt(convert.split('').reverse().join(''))
        if(result > Math.pow(2,31) - 1) return 0
        else return result        
    }else{
        convert = String(x*-1)
        result = -1 * parseInt(convert.split('').reverse().join(''))
        if(result < - Math.pow(2,31)) return 0
        else return result
    }
};