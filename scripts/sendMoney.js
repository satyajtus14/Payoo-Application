document.getElementById('transfer-btn').addEventListener('click', function() {
    
//  1. Get a bank account number
const accNo = getValueFromInput('transfer-UserAc');
if(accNo.length !== 11){
    alert('Invalid Account Number!');
    return;
}
// 2. Send Amount
const amount = getValueFromInput('transfer-amount');
const newBalance = getBalance() - Number(amount);


// 3. Get the pin and verified
const cashPin = getValueFromInput('transfer-pin');

// 3-1 If true --> Show an alert > Set Balance
if(cashPin === '1234'){
   alert(`Send Money $${amount} successful from ${accNo} at ${new Date()}`);
  setBalance(newBalance);

}
// 3-2 if false --> Show an error alert > return
else{
   alert('Invalid pin');
   return;
}

});