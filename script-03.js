const taxBands = [
    { index: 1, amount: 24000.00, description: 'On the first Shs. 24,000', taxRate: 10 },
    { index: 2, amount: 8333.00, description: 'On the next Shs. 8,333', taxRate: 25 },
    { index: 3, amount: 467667.00, description: 'On the next Shs. 467,667', taxRate: 30 },
    { index: 4, amount: 300000.00, description: 'On the next Shs. 300,000', taxRate: 32.5 },
    { index: 5, amount: 8000000.00, description: 'On all income above Shs. 8,000,000', taxRate: 35 }
];
const nhifRates = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: 10000000000, deduction: 1700 },
];
const nssfRate = 0.06;
const monthlyPersonalRelief = 2400;
const nssfTiers = [
    { min: 0, max: 7000 },
    { min: 7001, max: 36000 }
];
const basicSalary = 100000;
const benefits = 15000
runPayroll(basicSalary, benefits);


function runPayroll(basicSalary, allowances) {
    let grossAmount = basicSalary + allowances;
    console.log("Gross Amount::::", grossAmount);
    let nssfContribution = calculateNssfContribution(basicSalary);
    console.log("nssfContribution::::", nssfContribution);
    let taxableIncome = grossAmount - nssfContribution;
    console.log("taxableIncome::::", taxableIncome);
    let taxPayable = calculateTax(taxableIncome, taxBands);
    console.log("taxPayable::::", taxPayable);
    let nhifContribution = calculateNhifContribution(basicSalary);
    console.log("nhifContribution::::", nhifContribution);
    let paye = taxPayable-monthlyPersonalRelief;
    console.log("paye::::", paye);
    let netPayment = grossAmount + monthlyPersonalRelief - taxPayable - nhifContribution
    console.log("netPayment::::", netPayment);

    console.log("*******************PAYSLIP*****************")
    console.log("BASIC SALARY***************************",basicSalary)
    console.log("ALLOWANCES***************************",allowances)
    console.log("NSSF CONTRIBUTION***************************",nssfContribution)
    console.log("TAXABLE INCOME***************************",taxableIncome)
    console.log("TAXABLE PAYABLE***************************",taxPayable)
    console.log("PAYE***************************",paye)
    console.log("NHIF CONTRIBUTION***************************",nhifContribution)
    console.log("PERSONAL RELIEF**************************",monthlyPersonalRelief)
    console.log("NET**************************",netPayment)


}



function calculateNssfContribution(basicSalary) {
    if (nhifRates <= nssfTiers[0].max) {
        return nssfRate * nssfTiers[0].max;
    } else {
        return nssfRate * nssfTiers[1].max;
    }
}


function calculateNhifContribution(basicSalary) {
    for (let i = 0; i < nhifRates.length; i++) {
      const rate = nhifRates[i];
      if (basicSalary >= rate.min && basicSalary <= rate.max) {
        return rate.deduction;
      }
    }
    return 0;
  }



function calculateTax(taxPayable, taxBands) {
    let remainder = taxPayable;
    let tax = 0;

    const bandSize = taxBands.length;
    for (let i = 0; i < bandSize; i++) {
        const t = taxBands[i];
        console.log(`Index>>>>>>>>>>>>> ${t.index} Amount ${t.amount}`);

        if (i === bandSize - 1) {
            const tempTax = (remainder * t.taxRate) / 100;
            tax += tempTax;
            break;
        } else {
            if (remainder > t.amount) {
                const tempTax = (t.amount * t.taxRate) / 100;
                tax += tempTax;
                remainder -= t.amount;
            } else {
                const tempTax = (remainder * t.taxRate) / 100;
                tax += tempTax;
                break;
            }
        }
    }
    return tax;
}