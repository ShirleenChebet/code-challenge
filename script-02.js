// let speed = parseInt(prompt("Enter the speed of the car:"));
// const speedLimit = 70;

// if (speed < speedLimit) {
//     console.log("Ok");
// } else {
//     let demeritPoints = Math.floor((speed - speedLimit) / 5);
//     console.log(`Points: ${demeritPoints}`);

//     if (demeritPoints > 12) {
//         console.log("License suspended");
//     }
// }
const input = prompt("Enter speed of the car")
const speed = parseInt(input, 10)

// Validate input
if (isNaN(speed) || speed < 0){
    console.log("Invalid input. Please enter a valid input")
} else {
    calculateDemeritPoints(speed);
}

//Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;

    if (speed < speedLimit) {
        console.log("ok");
    } else {
       const excessSpeed = speed - speedLimit;
       const demeritPoints = Math.floor(excessSpeed)

       console.log(`Points: ${demeritPoints}`);
    
       if (demeritPoints > 12) {
          console.log("License Suspended")
       }
    } 
}








