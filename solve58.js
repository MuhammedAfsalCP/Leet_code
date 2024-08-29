var lengthOfLastWord = function(s) {
    let m=s.split(" ").filter((x)=>x!="")
   let n=m.length-1
   console.log(m[n].length);
   
};
lengthOfLastWord("Hello world   ")