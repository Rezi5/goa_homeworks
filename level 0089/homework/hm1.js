// 3Homework
function signup(email, password, more) {
    const user = {
    username: email,
    password: password,
    more: more
    };
    return user;
}
console.log(signup('vashli12ww3','12345678','mwvane vashlis moyvaruli'));


// 4Homework
const numbers = [1, 2, 3, 4, 5];
const [first,last,...middle] = numbers;
console.log(numbers)


