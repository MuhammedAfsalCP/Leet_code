var smallestEvenMultiple = function(n) {
    let a
    if(n%2!=0){
      a=n*2
      if(a%2==0){
        return a
      }
    }else{
        return n
    }
};