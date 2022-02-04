//smallest number with function call
function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (smallest > element) {
            smallest = element;
        }
    }
    return smallest;
}
const myNumber = [234, 475, 3487, 344, 23, 234, 13, 453];
const getSmallestNumber = smallestNumber(myNumber);
console.log(getSmallestNumber);
//Smsllest Number without function and condition
const minimum = Math.min(getSmallestNumber);
console.log(minimum);