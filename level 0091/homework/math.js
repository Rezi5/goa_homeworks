// Homework 5
export let Double = (N) =>{
    return N * 2
}

export let Triple = (T) =>{
    return T * 3
}

// Homework 6

export default function(S){
    let count = 0
    for(let i = 0; i< S.length; i++){
        count += S[i]
    }
    return count

}

// Homework 7
export let Even = (E) =>{
    let New = []
    for(let i = 0; i < E.length; i++){
        if(E[i] % 2 == 0){
            New.push(E[i])
        }
    }
    return New
}

// Homework 8
export let Reverse = (Rev) =>{
    return Rev.split('').reverse().join('')
}

// Homework 9
export let Sumarray = (Arr) =>{
    let SUM = 0
    for(let i = 0;i<Arr.length;i++){
        if(Arr[i] % 2 == 0){
            SUM += Arr[i]
        }
    }
    return SUM
}