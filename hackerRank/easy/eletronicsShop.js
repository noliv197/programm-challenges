function getMoneySpent(keyboards, drives, b) {
    let sumArr = []
    if(Math.min(...keyboards)+Math.min(...drives) > b) return -1
    else if(b >= Math.max(...keyboards) + Math.max(...drives)) return Math.max(...keyboards) + Math.max(...drives)
    else {
      for (let i=0; i<keyboards.length ; i++){
      for (let j=0; j<drives.length; j++){
        if(b >= keyboards[i]+drives[j]) sumArr.push(keyboards[i]+drives[j])
      }
    }}
    
    return Math.max(...sumArr)
  }

  getMoneySpent([
    [40,50,60],
    [5,8,12],
    60
  ])