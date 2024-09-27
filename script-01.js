let grade = parseInt(prompt("Enter your student marks(0 - 100):"));
const marks = (grade >= 0 && grade <= 100)
if (marks) {
    if (grade > 79) {
        alert("Your grade is A");
    } else if (grade >= 60) {
        alert("Your grade is B");
    } else if (grade >= 49) {
        alert("Your grade is C");
    } else if (grade >= 40) {
        alert("Your grade is D");
    } else {
        alert("Your grade is E");
    }
}