var createCounter = function(init) {
    let a=init
    return {
        increment:function(){
            return a+=1
        },
        decrement:function(){
            return a-=1
        },
        reset:function(){
            return a=init
        }
    }
};