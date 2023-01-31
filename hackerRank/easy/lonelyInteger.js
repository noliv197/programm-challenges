function lonelyinteger(a) {
    // Write your code here
    let occ = a.reduce((acc,curr)=> {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc  
    },{})
    return parseInt(Object.keys(occ).find(key=> occ[key] === 1))
}

lonelyinteger([1,2,3,4,3,2,1])