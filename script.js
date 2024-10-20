document.addEventListener('DOMContentLoaded', () => {
    const prices = [12, 8, 10, 7, 5]; // Prices for each item
    const totalBill = document.getElementById('total-bill');
    const quantityInputs = document.querySelectorAll('.quantity');
  
    // Calculate Total Function
    document.getElementById('calculate-total').addEventListener('click', () => {
      let total = 0;
      quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0;
        total += quantity * prices[index];
      });
      totalBill.textContent = total.toFixed(2);
    });
  
    // Reset Order Function
    document.getElementById('reset-order').addEventListener('click', () => {
      quantityInputs.forEach(input => input.value = '');
      totalBill.textContent = '0';
    });
  
    // Print Invoice Function
    document.getElementById('print-invoice').addEventListener('click', () => {
      window.print();
    });
  });
  