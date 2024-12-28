const isalnum = function (ch) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
        return true;
    return false;
};
const palindromes = function (str) {
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        while (l < r && !isalnum(str[l]))
            l++;
        while (l < r && !isalnum(str[r]))
            r--;
        if (str[l].toLowerCase() != str[r].toLowerCase())
            return false;
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
