/**
 * Recusively calculates factorial of given number
 * @param {number} n number to calculate factorial of
 * @param {number} f default 1, stores calculated factorial
 * @returns {number} factorial of number n
 */
export const factorial = (n, f = 1) => (n <= 1) ? f : factorial(n - 1, f * n);
