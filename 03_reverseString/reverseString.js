const reverseString = function (string) {
    string = string.split('')
    let l = 0
    let r = string.length
    while (l < r) {
        [string[l], string[r]] = [string[r], string[l]]
        l++
        r--
    }
    return string.join('')
};

// Do not edit below this line
module.exports = reverseString;
