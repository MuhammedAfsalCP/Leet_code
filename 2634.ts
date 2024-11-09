type Fn = (n: number, i: number) => any

function filter1(arr: number[], fn: Fn): number[] {
    return arr.filter(fn)
};