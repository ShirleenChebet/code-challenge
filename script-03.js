document.addEventListener("DOMContentLoaded", function() {
    let myElement = document.getElementById('myElement');
    console.log(myElement);
    myElement.addEventListener('click', function() {
    });
// Calculation of payee
function calculatePayee(taxableIncome) {
    if (taxableIncome <= 24000) return 0;
    if (taxableIncome <= 32333) return (taxableIncome -24000) * 0.1;
    if (taxableIncome <= 40333) return 833 + (taxableIncome - 32333) *0.15
    if (taxableIncome <= 48333) return 2083 + (taxableIncome - 40333) *0.2
    return 3683 + (taxableIncome - 48333) * 0.25;
}

//Calculation of Nhif

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    return 1000;
}
//Calculation of NSSF
function calculateNSSF(pensionablePay) {
    const nssfRate = 0.06;
    const maxContribution = 1080;
    return Math.min(pensionablePay * nssfRate, maxContribution);
}
//Calculation of Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nssf = calculateNSSF(basicSalary);
    const payee = calculatePayee(taxableIncome);
    const nhif = calculateNHIF(grossSalary);


const totalDeductions = payee + nhif + nssf;
const netSalary = grossSalary - totalDeductions;

return {
    grossSalary,
    payee,
    nhif,
    nssf,
    totalDeductions,
    netSalary
  };
}
//Users input

document.getElementById('salaryForm').addEventListener('submit',
function(e) {
    e.preventDefault();

    const basicSalary =
    parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

    const result = calculateNetSalary(basicSalary, benefits);

    document.getElementById('result').innerHTML = `
    <h2>Salary Breakdown:</h2>
    <p>Gross Salary: ${result.grossSalary.toFixed(2)}</p>
    <p>PAYE (TAX): ${result.payee.toFixed(2)}</p>
    <p>NHIF Deduction: ${result.nhif.toFixed(2)}</p>
    <p>NSSF Deduction: ${result.nssf.toFixed(2)}</p>
    <p>Total Deductions: ${result.totalDeductions.toFixed(2)}</p>
    <p><strong>Net Salary: ${result.netSalary.toFixed(2)}</strong></p>
    `;
});
});
