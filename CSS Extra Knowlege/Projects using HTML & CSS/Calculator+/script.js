function calculateSalary() {
    var itemPrice = parseFloat(document.getElementById('itemPrice').value);
    var downPaymentPercentage = parseFloat(document.getElementById('downPayment').value);
    var loanDuration = parseInt(document.getElementById('loanDuration').value);
  
    var downPayment = itemPrice * (downPaymentPercentage / 100);
    var loanAmount = itemPrice - downPayment;
    var monthlyEMI = loanAmount / loanDuration;
  
    // Assuming 20% of the monthly salary is affordable for EMI
    var monthlySalaryRequired = monthlyEMI * 5; // Multiply by 5 to get annual salary required
  
    document.getElementById('result').innerText = 'Monthly Salary Required: INR ' + monthlySalaryRequired.toFixed(2);
  }
  