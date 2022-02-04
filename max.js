
function largestNumber(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else third;
}

var getLargestNumber = largestNumber(556, 789, 364);
console.log("Largest Number is :", getLargestNumber);