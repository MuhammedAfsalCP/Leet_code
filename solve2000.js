var reversePrefix = function(word, ch) {
    let c =word.indexOf(ch)
   let a=[...word]
   let d=a.splice(0,c+1).reverse().join("")
   a=a.join("")
    return (d+a)
};