// case 1: variable comparison 
const userA = 'hello'
const userB = 'world'

console.log(userA ^ userB);

// case 2: value comparison
console.log(1 ^ 2);


// case 3: using in array function(aka: lambda)
const arr = ['a', 'b', 'c']

console.log(arr.filter(el => el ^ 'b'))