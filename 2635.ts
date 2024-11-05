function ma(arr: number[], fn: (n: number, i: number) => number): number[] {
    for(let i=0;i<arr.length;i++){
        arr[i]=fn(arr[i],j)
    }
    return arr
};