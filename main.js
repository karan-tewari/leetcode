let romanToInt = function(s) {
    let romanToInt = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    
    let total = 0;
    for(let i = 0; i<s.length; i++){
        if(romanToInt[s[i]] < romanToInt[s[i+1]]){
           total = total + (romanToInt[s[i+1]] - romanToInt[s[i]])
        }
        else{
            total = total + romanToInt[s[i]]
        }

    }
    console.log(total)
}


romanToInt('IIIV');