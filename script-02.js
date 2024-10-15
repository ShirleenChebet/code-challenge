const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for speed input
rl.question('Enter the speed of the car: ', (input) => {
    const speed = parseInt(input, 10);  // Convert input to a number

    // Validate input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
    } else {
        calculateDemeritPoints(speed);
    }

    rl.close();  // Close the readline interface after input is processed
});

// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);  // One point for every 5 km/h over the limit

        console.log(`Points: ${demeritPoints}`);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
