var isPalindrome = function(x) {
    let n=String(x).split("")
   
    let m=n.reverse().join("");
   if(x==m){
        return true;
    }else{

        return false;
       
    }
    
    
};
console.log(isPalindrome(121))