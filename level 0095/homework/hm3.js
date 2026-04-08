// Homework 3
let Cap = (A) =>{
    return A[0].toUpperCase() + A.slice(1)
}

let Rev = (B) =>{
    return B.split("").reverse().join("")
}

let Comb = {Cap,Rev}
export default Comb