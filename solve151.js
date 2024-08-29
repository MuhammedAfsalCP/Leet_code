var reverseWords = function(s) {
    let m=s.split(" ").filter((x)=>x!="").reverse().join(" ")
    return m
};