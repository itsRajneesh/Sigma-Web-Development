document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const bikePrice = parseFloat(document.getElementById('bikePrice').value);
  
    const downPayment = 0.15 * bikePrice;
    const loanAmount = bikePrice - downPayment;
    const interestRate = 0.09;
    const loanTermMonths = 36;
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTermMonths));
  
    const monthlyIncome = monthlyPayment / 0.05;
  
    document.getElementById('result').innerHTML = `<p>You should have a monthly salary of at least <strong>₹${monthlyIncome.toFixed(2)}</strong> to afford the bike.</p>`;
  });
  