let fobj = {
    name:"rezi",
    age:18,
    city:"batumi"
}

let{name,age} = fobj
console.log(name)
console.log(age)


let colors = ['black','white','blue','yellow','red']
let [first, , , ,  second] = colors
console.log(first)
console.log(second)



let settings ={
    theme:'Black',
    language:'Georgian'
}

let{theme,language="english"} = settings

console.log(language)


let NUmss = [3, 7];
let [a,b] = NUmss
console.log(a)
console.log(b)

let skip =  ["red", "green", "blue"];
let[c, ,d] = skip
console.log(c)
console.log(d)

let NAME = {
    Name:'Rezi',
}

let{Name, Age=18} = NAME
console.log(Name)
console.log(Age)

let rename = {
    theme:"black"
}

let{theme:Mode} = rename
console.log(Mode)


let scores = [10, 20, 30, 40];
let[First, ...rest] = scores;
console.log(First,rest);


let profile = {
    username: "Rezi",
    country: "Georgia"
};

let{username,country,AGe=19} = profile
console.log(username,country,AGe)


let missing =[5];
let [FIRST,SECOND=10] = missing
console.log(FIRST,SECOND)


let config ={
    MODE:'dark'
}

let{MODE:THEME="Light"}=config
console.log(THEME)


let usr = {
    name: "Rezi",
    stats: {
    strength: 90,
    speed: 85
    }
};
let{stats} = usr
console.log(stats)


let game = {
    title: "Wrestling Sim",
    SCORES: [100, 95, 90]
};
let{title,SCORES} = game
let[T,...REST] = SCORES
console.log(title,T,REST)
