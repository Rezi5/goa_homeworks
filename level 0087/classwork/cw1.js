
let numbers = [1, 2, 3];
let upd = [...numbers,4,5,6];
console.log(upd);

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1,...arr2];
console.log(arr3);

let colors = ["red", "blue"];
let upcolors = ['Green',...colors];
console.log(upcolors);

let obj = {0:10,1:20,3:30};
let obj1 = {...obj,4:40,5:50,6:60};
console.log(obj1);


let Usr = {name:"USR",age:17};
let Usr1 = {name:"USR1",age:18};
let Usr3 = {...Usr,...Usr1,}
console.log(Usr3)