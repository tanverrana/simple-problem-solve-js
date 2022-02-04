function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i]
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const numbers = [46, 374, 14676, 420000, 32];
const getLargestNumber = largestElement(numbers);
console.log("Largest:", getLargestNumber);