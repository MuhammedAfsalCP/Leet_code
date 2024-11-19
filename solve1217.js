var minCostToMoveChips = function(position) {
    let a=0;
    let b=0;
    for (let i=0;i<position.length;i++){
        if(position[i]%2==0){
            a++
        }else{
            c++
        }
    }
    return Math.min(a,b)
};