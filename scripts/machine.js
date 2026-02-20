
// machine id --- > input value

function getValueFromInput(id){
    const input = document.getElementById(id);
    const valueInput = input.value;
    console.log(id,valueInput)
    return valueInput;

}

// Return Current Balance --> get Balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('Current balance:')
    return Number(balance);
}

// machine value -- > set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// Machine id > Hide all id > Then show only selected id

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money');
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');
    const transaction = document.getElementById('Transaction');

    // Hidden all options to menu
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transaction.classList.add("hidden")

    // Only unhide which selected and send id to function
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}