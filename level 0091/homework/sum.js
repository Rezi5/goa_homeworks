// Homework 5
import S,{ Double,Triple,Even,Reverse,Sumarray} from "./math.js";
console.log(Double(20))
console.log(Triple(90))

// Homework 6
console.log(S([10,20,30,40,1000]))

// Homework 7
console.log(Even([10,20,13,1,2,3,4,56,7]))

// Homework 8
console.log(Reverse('Rezi'))




// Codewars1 Homewwokr 10
function positiveSum(arr) {
    let summm = 0
    for(let i = 0; i<arr.length;i++){
        if (arr[i] >= 0){
            summm += arr[i]
        }
    }
    return summm
}

// Codewars2 homework 11
function findSmallestInt(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}


console.log(Sumarray([2,4,6]))