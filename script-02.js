//Prompt user for speed input
const input = prompt("Enter the speed of the car")
const speed = parseInt(input, 10);

//validate input
if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a valid input.")
} else {
    calculateDemeritPoints(speed);
}

//Function to calculate demerit points based on
function calculateDemeritPoints(speed) {
    const speedLimit = 70;

    if (speed < speedLimit) {
        console.log("Ok")
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed)

        console.log('Points: ${demeritPoints}');
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
