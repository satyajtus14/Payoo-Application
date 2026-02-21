
document.getElementById('withdraw-btn').addEventListener('click',function(){

// 1. Get the agent number and validate the agent
const agentNumber = getValueFromInput('cashout-agent');
console.log(agentNumber);

if(agentNumber.length !==11 ){
   alert('Invalid Agent Number');
   return;

 }

//2. Get the account number input and validate & convert to number 
const cashoutAm = getValueFromInput('cashout-amount');
console.log(cashoutAm);

// 3. Get the current balance, validate and convert to number
const currentBalance = getBalance();


//   4. calculate new balance
const newBalance = currentBalance - Number(cashoutAm)
console.log('New Balance:',newBalance);

if(newBalance < 0){
   alert('Invalid Amount')
   return;
}

// 5. Get the pin and verified
const cashoutPin = getValueFromInput('cashout-pin');

// 5-1 If true --> Show an alert > Set Balance
if(cashoutPin === '1234'){
   alert('cashout sucessfull');
  setBalance(newBalance)

}
// 5-2 if false --> Show an error alert > return
else{
   alert('Invalid pin');
   return;
}

})