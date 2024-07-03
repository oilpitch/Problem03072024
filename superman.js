const readline = require('readline');

// Creating an interface to read from stdin and write to stdout:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// O(n) - The function to get the maximum number of protected chicken - use the sliding window technique
const getMaxProtectedChicken = (maxLengthSupermanCouldCarry, chickens) => {
    let maxProtectedChickens = 0;
    let left = 0;

    // O(n) when n=chickens.lengths - the Iterate over each chicken position with the right pointer
    for (let right = left; right < chickens.length; right++) {
        // O(n) - Shrink the window when the chicken length is more than max length which the super man could carry
        while (chickens[right] - chickens[left] + 1 > maxLengthSupermanCouldCarry) {
            // O(1)
            left++
        }
        // O(1) - Update the maximum number of protected chickens
        maxProtectedChickens = Math.max(maxProtectedChickens, right - left + 1);
    }
    return maxProtectedChickens
}

// The input function
rl.once("line", line1 =>
    rl.once("line", line2 => {
        // There are two parameter in the first line - the second parameter is the max length of the roof which the superman could carry
        const maxLengthSupermanCouldCarry = line1.split(' ').map(Number)[1];
        // There are n integers in the second line - split all the integers into an array (chickens) which shows the position of each chicken
        const chickens = line2.split(' ').map(Number);
        // output
        console.log(getMaxProtectedChicken(maxLengthSupermanCouldCarry, chickens))
        rl.close();
    })

);
