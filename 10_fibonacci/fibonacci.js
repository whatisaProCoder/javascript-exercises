const fibonacci = function (n) {
    if (typeof n == 'string')
        n = Number.parseInt(n)
    if (n < 0)
        return 'OOPS';
    a = 0;
    b = 1;
    for (let i = 0; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
