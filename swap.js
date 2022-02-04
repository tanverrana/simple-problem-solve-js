var first = 7;
var second = 9;
console.log(first, second);
//First swap
var temp = first;
first = second;
second = temp;
console.log(first, second);

//destructuring
[first, second] = [second, first];
console.log(first, second);