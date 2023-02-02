/* Second Submission  - Time complexity O(n)*/
var twoSum = function(nums, target) {
    let index=[]
    for (let i = 0;i<nums.length;i++){
        let rest = target - nums[i]
        if(nums.indexOf(rest) == -1) continue;
        else if(nums.lastIndexOf(rest) == i) continue;
        else{
            index.push(i)
            index.push(nums.lastIndexOf(rest))
            break;
        }
    }

    return([Math.min(...index),Math.max(...index)])  
};

/* First Submission  - Time complexity O(n2)*/
// var twoSum = function(nums, target) {
//     let index=[]
//     for (let i = 0;i<nums.length;i++){
//         for(let j=0;j<nums.length;j++){
//         if (i===j) continue
//         let sum = nums[i] + nums[j]
//         if(sum === target){
//             index.push(i)
//             index.push(j)
//             break 
//         }
//         }
//     }

//     return([Math.min(...index),Math.max(...index)])  
// };

console.log(`
Output:  ${twoSum([-1,-2,-3,-4,-5],-8)}
Expected: 2,4

Output:  ${twoSum([3,3],6)}
Expected: 0,1

Output:  ${twoSum([3,2,4],6)}
Expected: 1,2
`)