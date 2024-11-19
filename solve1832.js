var checkIfPangram = function(sentence) {
    let a=sentence.split('').filter((val)=>val>='a'&&val<='z'||val>='A'&&val<='Z')
    let s=new Set(a)
    
    console.log(s)
    if(s.size==26){
        return true
    }else{
        return false
    }
    
};