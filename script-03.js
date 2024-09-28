//Calculates the gross salary by adding the basic salary and benefits
//Computes Payee and defines nhif and nssf deductions
//Calculate total deductions and then net salary

function netsalarycalculator(basicsalary, benefits){
    //constants for deduction and tax rates
    const NHIFdeductions = 850;
    const NSSFdeductionsrate = 0.06;
    const NSSFdeductions = basicsalary * NSSFdeductionsrate;

    //calculate the gross pay
    const grosspay =basicsalary + benefits;

    //calculate the PAYE 
    let payee = 0;
    if (grosspay <= 29000) {
        payee = grosspay * 0.25;

    }else if (grosspay <= 40000) {
        payee = 7250 + (grosspay - 29000) * 0.30;

    }else {
        payee = 7250 + 10550 + (grosspay - 40000) * 0.325;
    }


//calculate total deductions
const totalDeductions =  payee + NHIFdeductions + NSSFdeductions;

//calculate net salary
const netSalary = grosspay - totalDeductions;

return {
    grosspay,
    payee,
    NHIFdeductions,
    NSSFdeductions,
    netSalary
};

}

//promots











































































