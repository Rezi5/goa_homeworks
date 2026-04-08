// Homework 5
let Sum = (A) =>{
    let count = 0
    for(let i = 0; i<A.length; i++){
        count += A[i]
    }
    return count
}

let Fmax = (B) =>{
    return Math.max(...B)
}

let Comb = {Sum,Fmax}

export default Comb