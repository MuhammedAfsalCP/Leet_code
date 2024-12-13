/**
 * @param {string} s
 * @return {number}
 */
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
    
    
    
    for(let g=0;g<s.length;g++){
        let f=s[g];
        let r=s[g+1];
        if(b[f]<b[r]){
            p-=b[f]
        }else{
            p+=b[f]
        }
    }
    return p;
};