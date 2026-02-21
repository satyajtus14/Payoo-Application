
document.getElementById('pay-btn').addEventListener('click',function(){

     // 1. Get Bank information
     const bankAccount = getValueFromInput('pay-bill-bank')
     console.log(bankAccount);
 
     if(bankAccount == 'Select a bank'){
         alert('Please select a bank');
         return;
     }
 //  2. Get a biller account number
 const accBillerNo = getValueFromInput('biller-ac-number');
 if(accBillerNo.length !== 11){
     alert('Invalid Account Number!');
     return;
 }
 // 3. Pay Bill Amount
 const amount = getValueFromInput('pay-amount');
 const newBalance = getBalance() - (Math.abs(Number(amount)));
 
 
 // 4. Get the pin and verified
 const cashPin = getValueFromInput('billPay-pin');
 
 // 4-1 If true --> Show an alert > Set Balance
 if(cashPin === '1234'){
    alert(`Your Due Bill Amount $${amount} successful payment from ${bankAccount} at ${new Date()}`);
    
    setBalance(newBalance);
 
 }
 // 4-2 if false --> Show an error alert > return
 else{
    alert('Invalid pin');
    return;
 }
 
 });