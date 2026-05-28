// Hm1
let usr = new Promise((resolve,reject)=>{
    let status = 500
    setTimeout(()=>{
        if(status >= 200){
            resolve("Server works")
        }else{
            reject("Server fails")
        }
    },2000)
})
usr
    .then((SeeStatus)=>{
        console.log(SeeStatus)
    })
    .catch((SeeStatus1)=>{
        console.log(SeeStatus1)
    })
    .finally(()=>{
        console.log("Done")
    })

//Hm2
let usr1 = new Promise((resolve,reject)=>{
    let isSubscribed = false
    setTimeout(()=>{
        if(isSubscribed == true){
            resolve("Premium Granted")
        }else{
            reject("U need subscribtion")
        }
    },1000)
})
usr1 
    .then((CheckIfSubscribed)=>{
        console.log(CheckIfSubscribed)
    })
    .catch((CheckIfSubscribed1)=>{
        console.log(CheckIfSubscribed1)
    })
    .finally(()=>{
        console.log("Enjoy")
    })

//Hm3
let usr3 = new Promise((resolve,reject)=>{
    let FileSize = 8
    setTimeout(()=>{
        if(FileSize <= 10){
            resolve("File uploaded")
        }else{
            reject("File is too big")
        }
    },2000)
})
usr3
    .then((CheckFile)=>{
        console.log(CheckFile)
    })
    .catch((CheckFile1)=>{
        console.log(CheckFile1)
    })
    .finally(()=>{
        console.log("Done")
    })

// Hm4
let usr4 = new Promise((resolve,reject)=>{
    let Weather = "Rainy"
    setTimeout(()=>{
        if(Weather === "Sunny"){
            resolve("Go outside")
        }else{
            reject("Stay home")
        }
    },1000)
})
usr4
    .then((CheckWeather)=>{
        console.log(CheckWeather)
    })
    .catch((CheckWeather1)=>{
        console.log(CheckWeather1)
    })
    .finally(()=>{
        console.log("Tommorow is sunny")
    })

// Hm5
let usr5 = new Promise((resolve,reject)=>{
    let Coins = 250
    setTimeout(()=>{
        if(Coins >=200){
            resolve("U cane buy item")
        }else{
            reject("Not enough money")
        }
    },2000)
})
usr5
    .then((CheckCoins)=>{
        console.log(CheckCoins)
    })
    .catch((CheckCoins1)=>{
        console.log(CheckCoins1)
    })
    .finally(()=>{
        console.log("Wallet is emty")
    })

//     level 111:
// 1) შექმენი Promise, სადაც serverStatus = 500.
// 2 წამში:
// თუ serverStatus === 200 → resolve "Server works correctly".
// თუ არა → reject "Server error".
// 2) შექმენი Promise, სადაც isSubscribed = false.
// 1 წამში:
// თუ true → resolve "Premium access granted".
// თუ false → reject "You need subscription".
// 3) შექმენი Promise, სადაც fileSize = 8.
// 2 წამში:
// თუ fileSize <= 10 → resolve "File uploaded".
// თუ არა → reject "File is too large".
// 4) შექმენი Promise, სადაც weather = "rainy".
// 1 წამში:
// თუ weather === "sunny"→ resolve"Go outside". თუ არა → reject "Stay at home"`.
// 5) შექმენი Promise, სადაც coins = 250.
// 2 წამში:
// თუ coins >= 200 → resolve "You can buy the item".
// თუ არა → reject "Not enough coins".