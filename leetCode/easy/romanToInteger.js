var romanToInt = function(s) {
    let roman = {'I':1,'V':5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    let conversion = 0
    for(let i=0;i<s.length;i++){
      conversion = conversion + roman[s[i]]
    }
    if(/IV/.test(s)){
        conversion = conversion - 2
    }
    if(/IX/.test(s)){
        conversion = conversion - 2
    }
    if(/XL/.test(s)){
        conversion = conversion - 20
    }
    if(/XC/.test(s)){
        conversion = conversion - 20
    }
    if(/CD/.test(s)){
        conversion = conversion -200
    }
    if(/CM/.test(s)){
        conversion = conversion - 200
    }
    return conversion
};