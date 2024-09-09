var isPalindrome = function(s) {
    let a=s.toLowerCase(s).split("").filter((x)=>x>="a"&&x<="z"||x>="0"&&x<=9).join("")
   let b=a.split("").reverse().join("")
   console.log(a)
   console.log(b)
   if(a==b){
    return true
   }else{
    return false
   }

};