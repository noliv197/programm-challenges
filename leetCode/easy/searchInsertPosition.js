var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    if(index !== -1) return index
    else{
        if(target<nums[0]) return 0
        let minI = 0
        for(let i = 0;i<nums.length;i++){
            if(nums[i]<target){
                minI = i
            }else if(nums[i]>target){
                break
            }
        }
    return minI + 1
    }
};