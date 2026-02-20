
document.getElementById('withdraw-btn').addEventListener('click',function(){

      // 1. Get the agent number and validate the agent
   const agentNumber = document.getElementById('cashout-agent');
   const cashoutAgent = agentNumber.value;
   console.log(cashoutAgent)
   if(cashoutAgent.length !==11 ){
     alert('Invalid Agent Number');
     return;

   }

    //2. Get the account number input and validate & convert to number 
    const cashoutAm = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAm.value;
    console.log(cashoutAmount)

   // 3. Get the current balance, validate and convert to number
     const balaceElement = document.getElementById('balance');
     const balance = balaceElement.innerText;
     console.log(balance);

  //   4. calculate new balance
      const newBalance = Number(balance) - Number(cashoutAmount)
      console.log('New Balance:',newBalance);

      if(newBalance < 0){
         alert('Invalid Amount')
         return;
      }
  // 5. Get the pin and verified
const cashoutPin = document.getElementById('cashout-pin');
const pinCash = cashoutPin.value;

// 5-1 If true --> Show an alert > Set Balance
if(pinCash === '1234'){
   alert('cashout sucessfull');
   console.log('New Balance:',newBalance);
   balaceElement.innerText = newBalance;

}
// 5-2 if false --> Show an error alert > return
else{
   alert('Invalid pin');
   return;
}







})