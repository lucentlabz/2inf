const math = require('mathjs'); // You might need to install this package

function computeAlgorithm() {
    // Compute e^9!
    const factorial_9 = math.factorial(9);
    const exponential_factorial_result = math.exp(factorial_9);
    
    // Compute the logarithm in a numerically stable way
    const base = 0.123456789;
    const exponent = 987654321.0;
    const log_result = exponent * math.log(base);
    
    return exponential_factorial_result, log_result;
}

// Call the function to compute the algorithm
const [exponential_factorial_result, log_result] = computeAlgorithm();

// Check if the results match the expected values
if (exponential_factorial_result === Infinity && log_result === -Infinity) {
    console.log("The algorithm is correct. Results: ♾️, -♾️");
} else {
    console.log("The algorithm might have issues.");
}
