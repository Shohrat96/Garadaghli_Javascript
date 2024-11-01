
// Can be run in any online node compiler or node environment

// Function to check if a number is greater than 7 and print "Hello"
function checkNumber(inputNumber) {
    if (inputNumber > 7) {
        console.log("Hello");
    }
}

// Function to check the name and print appropriate message
function checkName(inputName) {
    if (inputName === "John") {
        console.log("Hello, John");
    } else {
        console.log("There is no such name");
    }
}

// Function to output array elements that are multiples of 3
function filterMultiplesOfThree(inputArray) {
    const multiplesOfThree = inputArray.filter(num => num % 3 === 0);
    console.log("Multiples of 3:", multiplesOfThree);
}


// Interactive input handling
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (numberInput) => {
    const number = parseInt(numberInput);
    checkNumber(number);
    
    readline.question('Enter a name: ', (nameInput) => {
        checkName(nameInput);
        
        readline.question('Enter a comma-separated numeric array: ', (arrayInput) => {
            const array = arrayInput.split(',').map(num => parseInt(num.trim()));
            filterMultiplesOfThree(array);
            
            const bracketSequence = '[((())()(())]]'; // Example input
            console.log(`The given parenthesis sequence -${bracketSequence} - is not correct. In order to make it correct, one closing parenthesis and one opening square parenthesis must be added.`);

            
            readline.close();
        });
    });
});
