function sum(n1){
    let s = n1
    function next(n2){
        if(!isNaN(n2)){
            s+=n2
            return next
        }
        return s
    }
    return next
}

console.log(sum(2)(3)(4)(5))