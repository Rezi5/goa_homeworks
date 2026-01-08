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

console.log(theme)
console.log(language)