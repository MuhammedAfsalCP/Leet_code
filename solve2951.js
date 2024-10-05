var findPeaks = function(mountain) {
    const a=[]
    for(let i=0;i<mountain.length;i++){
        if(i!=0&&i!=mountain.length-1){
            if(mountain[i]>mountain[i-1]&&mountain[i]>mountain[i+1]){
               a.push(i)
            }
        }
    }
    return a
};