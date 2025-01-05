const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input) => {
    console.log(`Input received: ${input}`); // Debugging log

    const number = parseFloat(input);

    if (isNaN(number)) {
        console.log("That's not a valid number.");
    } else if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }

    rl.close();
});
















// let number = parseFloat(prompt("Enter a number:"));

// // Checking if the number is positive, negative or zero
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }