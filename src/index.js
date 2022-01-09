module.exports = function reverse (n) {
    let i = 0;
    let result = 0;
    while (n) {
        i = n % 10;
        result = (result * 10) + i;
        n = n/10|0;
    };
    return Math.abs(result);
}
