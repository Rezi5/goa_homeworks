let nums1 = [1, 2, 3, 4, 5]
let sum = 0
nums1.forEach(n => sum += n)
console.log(sum)

let nums2 = [4, 12, 9, 20, 15]
let count = 0
nums2.forEach(n => {
    if (n > 10) count++
})
console.log(count)

let nums3 = [2, 5, 7]
let doubled = []
nums3.forEach(n => doubled.push(n * 2))
console.log(doubled)

let values = [true, false, true, true, false]
let c = 0
values.forEach(v => {
    if (v === true) c++
})
console.log(c)

let nums4 = [3, 18, 7, 25, 10]
let max = nums4[0]
nums4.forEach(n => {
    if (n > max) max = n
})
console.log(max)