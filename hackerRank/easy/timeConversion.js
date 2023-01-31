function timeConversion(s) {
    // Write your code here
    let zone = s.match(/.{2}$/)
    let time = s.split(':')
    let hour = time[0]
    if(zone == 'PM'){
        if(hour !=='12') time[0] = String(parseInt(hour) + 12)
        return time.join(':').slice(0,8)
    }
    else{
        if(hour =='12') time[0] = '00'
        return time.join(':').slice(0,8)
    }
}

timeConversion('07:05:45:PM')