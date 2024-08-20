var romanToInt = function(s) {
   let b={
    I:1,
   V:5,
    X:10,
    L:50,
    C:100,
     D:500,
     M:1000
   }
    let p=0;
    let a=s.split("");
    
    
    for(let g=0;g<a.length;g++){
        let f=a[g];
        let r=a[g+1];
        if(b[f]<b[r]){
            p-=b[f]
        }else{
            p+=b[f]
        }
    }
    console.log(p)
};
romanToInt("III")