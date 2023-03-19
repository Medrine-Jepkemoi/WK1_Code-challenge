//Declaring an object variable to store the keys and values of the various benefits available for employees
const benefits = {

    personalRelief: 2400,	
    insuranceRelief: 5000,	
    pensionFund: 20000,	
    allowableHOSP: 0,	
    housingRelief: 9000,	
    occupierInterest: 25000,
    disabilityExemption: 150000	

}
   

/**
* Calculate the total deductions by adding all deductions to be subtracted from the gross pay.
* @param {Number} payee
* @param {Number} nhifDeductions
* @param {Number} nssfDeduction
* @return {Number} totalDeductions
*/

function deductions(payee, nhifDeductions, nssfDeduction){

    let totalDeductions = payee + nhifDeductions + nssfDeduction;

    return totalDeductions;
}


/**
* calculates the grossSalary to be used to compute the deductions using the arguments passed to the parameters
* @param {Number} basicSalary
* @param {Number} benefits
* @return {Number} grossSalary
*/

function calculateGross(basicSalary, benefits){

    let grossSalary  = basicSalary + benefits;

    return grossSalary;

}


/**
* Adds all the object key values in the benefits object if the employee is disabled. If not, it exempts the disabilityExemption benefits in the calculation
* @param {Number} disabled
* @return {Number} totalBenefits
*/
function employeeBenefits(disabled){

    let totalBenefits;


    if(disabled === 'yes'){

        totalBenefits = benefits['personalRelief'] + benefits['insuranceRelief'] + benefits['pensionFund'] + benefits['allowableHOSP'] + benefits['housingRelief'] + benefits['occupierInterest'] + benefits['disabilityExemption'];
    }

    else {

        totalBenefits = benefits['personalRelief'] + benefits['insuranceRelief'] + benefits['pensionFund'] + benefits['allowableHOSP'] + benefits['housingRelief'] + benefits['occupierInterest'];
    }

    return totalBenefits;

}


/**
* Calculates the payee using percentages set based on the grossSalary range of an employee's gross'
* @return {Number} payee
*/

function calculatePayee(grossSalary){


//Conditions set to ddetermine where a certain payment lies
    if(grossSalary <= 24000){

        payee = grossSalary * 0.1;
    }

     else if(grossSalary <= 32333){
         payee = grossSalary * 0.25;
     }

     else if (grossSalary > 32333){
         payee = grossSalary * 0.3
     }

     return payee;

    
}



/**
* Calculates the nhif contributions by an employee using percentages set based on the grossSalary range of an employee's gross'
* @param {Number} grossSalary
* @return {Number} nhifDeductions
*/

function calculateNhif(grossSalary){

    let nhifDeductions;


     if (grossSalary < 6000){
         nhifDeductions = 150;
     }

     else if (grossSalary < 8000){
         nhifDeductions = 300;
     }

     else if(grossSalary < 12000){
         nhifDeductions = 400;
     }

     else if (grossSalary < 15000){
         nhifDeductions = 500;
     }

     else if( grossSalary < 20000){
         nhifDeductions = 600
     }

     else if(grossSalary < 25000){
         nhifDeductions = 750;
     }

     else if(grossSalary < 30000){
         nhifDeductions = 850;
     }

     else if(grossSalary < 35000){
         nhifDeductions = 900;
     }

     else if(grossSalary < 40000){
         nhifDeductions = 950;
     }

     else if(grossSalary < 45000){
         nhifDeductions = 1000;
     }

     else if(grossSalary < 50000){
         nhifDeductions = 1100;
     }

     else if(grossSalary < 60000){
         nhifDeductions = 1200;
     }

     else if(grossSalary < 70000){
         nhifDeductions = 1300;
     }

     else if(grossSalary < 80000){
         nhifDeductions = 1400;
     }

     else if(grossSalary < 90000){
         nhifDeductions = 1500;
     }

     else if( grossSalary < 100000){
         nhifDeductions = 1600;
     }

     else if(grossSalary >= 100000){
         nhifDeductions = 1700;
     }

     return nhifDeductions;

    }
    



/**
* Calculates the nssf contributions by an employee using percentages set based on the grossSalary range of an employee's gross', the nssf rate that the company is using and whether there is an alternative pension scheme under the tier II division using the new rates
* @param {Number} grossSalary
* @param {Number} nssfRate
* @param {Number} alternativeScheme
* @return {Number} nssfDeductions
*/
function calculateNssf(grossSalary, nssfRate, alternativeScheme){

    let nssfDeduction;


//condition to determine the contribution using the new rates
    if (nssfRate === 'new') {

        nssfDeduction = grossSalary * 0.06; 


        //condition set based on what tier an employee falls on which is determined by how much they contribute
        //Tier I condition based on a certain amount of contribution
        if (nssfDeduction <= 6000){

            return nssfDeduction;
        } 


        //Tier II condition based on a certain range the contribution falls in or if there is an alternative pension scheme that an employee can contribute too
        else {

            return alternativeScheme === 'yes' ? console.log(6000) : (nssfDeduction <= 18000 ? nssfDeduction : 18000 );
            };
        }

    else {

        nssfDeduction = grossSalary * 0.05;
        
        nssfDeduction <= 400 ? nssfDeduction : nssfDeduction = 400;
    }

    return nssfDeduction;

}

/**
* Calculates the net salary of an employee deducting the deductions(payee, nhif contributions and nssf contributions) from their gross salary by calling the above functions 
* @param {Number} basicSalary
* @param {Number} benefits
* @return {Number} netPay
*/

function netSalary(basicSalary, benefits){

    // calling the employeeBenefits functions and assigning the desired parameters to it to calculate the total benefits an employee enjoys
    let returnedBenefits = employeeBenefits('no');
    console.log(`Total Benefits: ${returnedBenefits}`)

    //calling the calculateGross function and assigning the desired parameters to it to calculate the gross salary of an employee
    let returnedGross = calculateGross(basicSalary, returnedBenefits);
    console.log(`Gross Salary: ${returnedGross}`)

    //calling the calculatePayee function and assigning the desired parameters to it to calculate what amount of payee the employee is charged for deduction
    let returnedPayee = calculatePayee(returnedGross);
    console.log(`Payee: ${returnedPayee}`)

    //calling the calculateNhif function and assigning the desired parameters to it to calculate what amount of nhif the employee contributes
    let returnedNhif = calculateNhif(returnedGross);
    console.log(`Nhif Deduction: ${returnedNhif}`)

    //calling the calculateNssf function and assigning the desired parameters to it to calculate what amount of nssf the employee contributes
    let returnedNssf = calculateNssf(returnedGross, 'old', 'no');
    console.log(`Nssf Deduction: ${returnedNssf}`)

    //calling the deductions function and assigning the desired parameters to it to calculate the total amount that will be deducted from an employees gross
    let returnedDeductions = deductions(returnedPayee, returnedNhif, returnedNssf);
    console.log(`Total Deductions: ${returnedDeductions}`)

    //declaring a variable to store the value of the net pay an employee by doing the necessary arithmetic operations 
    let netPay = returnedGross - returnedDeductions;
    return netPay;

    
}

//calling the calculateNssf function and assigning the desired parameters to it to calculate the net salary an employee will recieve as payment after all deductions have been made
let returnedNetSalary = netSalary(30000, benefits);
console.log(`Net Salary: ${returnedNetSalary}`)