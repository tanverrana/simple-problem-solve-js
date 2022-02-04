function fibonacciSeries(num) {
    if (typeof num != "number" || num < 2) {
        return "Please give me a positive number."
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacciSeriesNumber = fibonacciSeries(1);
console.log(fibonacciSeriesNumber);