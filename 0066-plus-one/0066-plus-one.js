var plusOne = function(digits) {
    return (BigInt(digits.join(''))+BigInt(1)).toString().split('').map((x)=> Number(x))
};