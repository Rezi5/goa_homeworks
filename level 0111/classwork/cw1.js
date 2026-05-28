// cw1
const Usr = new Promise((resolve,reject)=>{
    const loggedin = true
    setTimeout(()=>{
        if(loggedin){
            resolve("Logged in")
        }else{
            reject("Failed")
        }
    },3000)
})

Usr
    .then((res)=>{
        console.log(res)
    })
    .catch((fai)=>{
        console.log("failed")
    })
    .finally(()=>{
        console.log("DOne")
    })

// cw2
const usr1 = new Promise((resolve,reject)=>{
    const age = 18
    setTimeout(()=>{
        if(age >=18){
            resolve("Acess granted")
        }
        else{
            reject("Acess denied")
        }
    },1000)
})
usr1
    .then((RES)=>{
        console.log(RES)
    })
    .catch((FAI)=>{
        console.log(FAI)
    })
    .finally(()=>{
        console.log("enjoy")
    })
// cw3
const usr2 = new Promise((resolve,reject)=>{
    const balance = 120
    setTimeout(()=>{
        if(balance => 100){
            resolve("Completed")
        }else{
            reject("Failed")
        }
    },2000)
})

usr2
    .then((Completed)=>{
        console.log(Completed)
    })
    .catch((Failed)=>{
        console.log("failed")
    })
    .finally(()=>{
        console.log("Done")
    })

// cw4
let usr3 = new Promise((resolve,reject)=>{
    const pass = 1234
    setTimeout(()=>{
        if(pass == "admin123"){
            resolve("Granted")
        }else{
            reject("REjected")
        }
    },1000)
})

usr3
    .then((S)=>{
        console.log(S)
    })
    .catch((F)=>{
        console.log(F)
    })
    .finally(()=>{
        console.log("Congrats")
    })

// cw5
let usr4 = new Promise((resolve,reject)=>{
    const temp = 35
    setTimeout(()=>{
        if(temp > 30){
            resolve("Hot")
        }else{
            reject("warm")
        }
},2000)
})

usr4
    .then((check)=>{
        console.log(check)
    })
    .catch((not)=>{
        console.log(not)
    })
    .finally(()=>{
        console.log("OK")
    })