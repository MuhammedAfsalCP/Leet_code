/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    
    let a=1
    let b=n
    while(a<=b){
        let mid=Math.floor((a+b)/2)
        let num = guess(mid);
        if(num===0){
            return mid
        }else if (num===1){
            a=mid+1
        }else{
            b=mid-1
        }
    }
};
