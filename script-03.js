const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculatePayee(taxableIncome) {
    if (taxableIncome <= 24000) return 0;
    if (taxableIncome <= 32333) return (taxableIncome - 24000) * 0.1;
    if (taxableIncome <= 40333) return 833 + (taxableIncome - 32333) * 0.15;
    if (taxableIncome <= 48333) return 2083 + (taxableIncome - 40333) * 0.2;
    return 3683 + (taxableIncome - 48333) * 0.25;
}

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

function calculateNSSF(pensionablePay) {
    const nssfRate = 0.06;
    const maxContribution = 1080;
    return Math.min(pensionablePay * nssfRate, maxContribution);
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nssf = calculateNSSF(basicSalary);
    const taxableIncome = grossSalary - nssf; 
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

rl.question('Enter your basic salary: ', (basicSalaryInput) => {
    rl.question('Enter your benefits: ', (benefitsInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        const benefits = parseFloat(benefitsInput);

        const result = calculateNetSalary(basicSalary, benefits);

        console.log(`Salary Breakdown:`);
        console.log(`Gross Salary: ${result.grossSalary.toFixed(2)}`);
        console.log(`PAYE (TAX): ${result.payee.toFixed(2)}`);
        console.log(`NHIF Deduction: ${result.nhif.toFixed(2)}`);
        console.log(`NSSF Deduction: ${result.nssf.toFixed(2)}`);
        console.log(`Total Deductions: ${result.totalDeductions.toFixed(2)}`);
        console.log(`Net Salary: ${result.netSalary.toFixed(2)}`);

        rl.close();
    });
});
