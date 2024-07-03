const readline = require('readline');

// Creating an interface to read from stdin and write to stdout:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// O(1) - This function takes an input string and checks if it meets the criteria to be considered a "Good boy":
const checkIsGoodBoy = (input) => {
    // O(1) - Checks the length of the input string 
    if(input.length < 2){
        return false
    }
    // O(1) - Accesses first & last charactersm and compares the characters
    if(input[0]==='S' && input[input.length-1]==='R'){
        return true
    }
    // O(1)
    return false
}

// Reading user input and checking if it's a "Good boy" or "Bad boy":
rl.question('', (input) => {
    console.log(checkIsGoodBoy(input)? 'Good boy': 'Bad boy')
    rl.close();
});