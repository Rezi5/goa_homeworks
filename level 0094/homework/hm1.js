let usr = (...Maxdif) =>{
    for(let us of Maxdif){
        console.log(Math.max(...Maxdif))
        console.log(Math.min(...Maxdif))
    }
}
usr(10,20,30,40,50,60)


function mergeAndFilter(min, ...arrays) {
    let merged = []
    let result = []

    for (let arr of arrays) {
        for (let num of arr) {
        merged.push(num)
    }
}

    for (let n of merged) {
        if (n > min) {
            result.push(n)
    }
}

return result
}

const user = { name: "Gio", age: 17, city: "Tbilisi" }

updateUser(
    user,
    { age: 18 },
    { city: "Batumi" },
    { name: "Rezi" }
)