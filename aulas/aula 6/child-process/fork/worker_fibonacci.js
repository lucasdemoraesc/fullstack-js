function fibonacci(n) {
    return !n || n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(45);
console.log(result);
