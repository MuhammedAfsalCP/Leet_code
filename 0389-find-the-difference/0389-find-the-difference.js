/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  s=s.split("").sort()
  t=t.split("").sort()
  let b=[]
  let c;
  let e
  if(s.length>t.length){
        c=s
        e=t
  }else{
    c=t
    e=s
  }
  let j=0
  for (let i=0;i<c.length;i++){
    if(c[i]!=e[i]){
        return c[i]
        
    }
  }
 

};