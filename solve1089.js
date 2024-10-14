var duplicateZeros = function(arr) {
    for(let i=0;i<arr.length;i++){
      if(arr[i]==0){
        for(let j=arr.length-1;j>i;j--){
           arr[j]=arr[j-1]
        }
        if(i+1!=arr.length){
            arr[i+1]=1
        i++
        }
      }
       
    }
};