//Negative Number to positive Number
const myNumber = -5;
const output = Math.abs(myNumber);
console.log("Our Number is:", output);

// Float to Int  ceil = up, floor = down, round = middle;
const myNumber2 = 33.00001;
const output2 = Math.ceil(myNumber2);
console.log("Our Int Number=", output2);

//Random number
const randomNumber = Math.random();
console.log(randomNumber);

//Random Number with Int.
const randomNumber2 = Math.random() * 100;
const rounded = Math.round(randomNumber2);
console.log("Our Random Number is :", rounded);

//using Loop
for (let i = 0; i <= 20; i++) {
    const randomNumber3 = Math.random() * 6;
    const rounded2 = Math.round(randomNumber3);
    console.log("Random Number Using Loop", rounded2);
}
