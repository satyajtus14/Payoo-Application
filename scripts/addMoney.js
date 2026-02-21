document.getElementById('add-btn').addEventListener('click', function() {
    
    // 1. Get Bank information
    const bankAccount = getValueFromInput('add-money-bank')
    console.log(bankAccount);

    if(bankAccount == 'Select a bank'){
        alert('Please select a bank');
        return;
    }
//  2. Get a bank account number
const accNo = getValueFromInput('addcash-ac-number');
if(accNo.length !== 11){
    alert('Invalid Account Number!');
    return;
}
// 3. Get Amount
const amount = getValueFromInput('addcash-amount');
const newBalance = getBalance() + Number(amount);


// 4. Get the pin and verified
const cashPin = getValueFromInput('cash-pin');

// 4-1 If true --> Show an alert > Set Balance
if(cashPin === '1234'){
   alert(`Add Money successful from ${bankAccount} at ${new Date()}`);
  setBalance(newBalance);

}
// 4-2 if false --> Show an error alert > return
else{
   alert('Invalid pin');
   return;
}

});