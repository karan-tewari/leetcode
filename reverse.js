var reverse = function(x) {
    return x > 0 ? x.toString().split('').reverse().join('') : x.toString().split('').splice(1).reverse().join('') * -1
};

console.log(reverse(-1234))     