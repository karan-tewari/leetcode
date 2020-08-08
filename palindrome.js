var isPalindrome = function(x) {
    if(x == x.toString().split('').reverse().join('')){
        console.log(true);
    }
    else{
        console.log(false);
    }
};

isPalindrome(123)