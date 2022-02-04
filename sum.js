const numbers = [34, 657, 27, 90, 23, 12, 98, 54];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;

}
console.log(sum);

//Function Call
function totalSum(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const number = [100, 100, 100, 55, 55];
const getTotalSum = totalSum(number);
console.log(getTotalSum);