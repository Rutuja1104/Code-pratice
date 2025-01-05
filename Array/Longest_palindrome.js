function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

function findLongestPalindrome(arr) {
    let longestPalindrome = '';

    for (let item of arr) {
        let str = typeof item === 'number' ? item.toString() : item;

        if (typeof str === 'string' && isPalindrome(str) && str.length > longestPalindrome.length) {
            longestPalindrome = str;
        }
    }

    return longestPalindrome;
}

const mixedArray = ["racecar", 11112321111, "banana", 45654, "madam", "level", 78987, 1234321, "apple"];
const longestPalindrome = findLongestPalindrome(mixedArray);
console.log("The longest palindrome is:", longestPalindrome);
