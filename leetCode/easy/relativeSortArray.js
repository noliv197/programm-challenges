var relativeSortArray = function(arr1, arr2) {
    let difference = arr1.filter(x => !arr2.includes(x));
    difference=difference.sort((a,b)=>a-b)
    let reorder = []
    let occurances = arr1.reduce((acc,curr)=>{
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    },{})
    arr2.forEach(num=> {
      if(occurances[num]){
        for(let i = 0;i<occurances[num];i++){
          reorder.push(num)
        }
      }
    })
    return reorder.concat(difference)
};