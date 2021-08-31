
let deposit_amount = document.querySelector('#deposit__text');
let btn = document.querySelector('#btn');
let form = document.querySelector('form');
let h3 = document.querySelector('h3');
let h2 = document.querySelector('h2');
let h4 = document.querySelector('h4');


let balance = 500000

function Deposit(e){
    e.preventDefault()
    let new_bal = balance + deposit_amount.value;
    newb = deposit_amount.value
    newb = Number(newb)

    if(deposit_amount.value.length == ''){
        alert('Please Enter an amount');
        h3.textContent = 'Enter an Amount to deposit';
        deposit_amount.value = ''
        
    }
    if (deposit_amount.value.startsWith('-')){
        h2.textContent = 'Please enter a valid amount'
    }
    else{
        new_bal = balance + newb;
        balance = new_bal
        h2.textContent = `Your new balance is ₦${new_bal}`;
        h4.textContent = `You deposited ₦${newb}`
        deposit_amount.value = ''
    }
}

form.addEventListener('submit', Deposit)






































