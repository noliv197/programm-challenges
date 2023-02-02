var sortArrayByParity = function(nums) {
    let even = nums.filter(num=> num%2===0) 
    let odd = nums.filter(num=>num%2!==0) 
    return even.concat(odd)
};