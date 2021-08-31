
let withdraw_amount = document.querySelector('#withdraw__text');
let btn = document.querySelector('#btn');
let form = document.querySelector('form');
let h3 = document.querySelector('h3');
let h2 = document.querySelector('h2');
let h4 = document.querySelector('h4');
let success = document.querySelector('.successMessage')

let balance = 500000

function withdraw(e){
    e.preventDefault()
    let bal = balance - withdraw_amount.value
    balance = bal
    
    if(withdraw_amount.value.length == ''){
        alert('Please enter an amount')
        h3.textContent = 'Enter an Amount to withdraw';
        withdraw_amount.value = ''
    
    }
    else if (withdraw_amount.value.startsWith('-')){
        h2.textContent = 'Please enter a valid amount'
        withdraw_amount.value = ''
        success.style.display = 'none'
    }
    else if (bal <= 1000){
        h3.textContent = 'Insufficient funds'
        success.style.display = 'none'
        
    }
    else if (withdraw_amount.value > balance){
        h3.textContent = 'Insufficient funds'
        withdraw_amount.value = ''
        success.style.display = 'none'
        
    }
    else{
            h3.textContent = 'Withdrawal was successful';
            h2.textContent =  `Your account balance is  ₦${bal}`
            h4.textContent = `You withdrew ₦${withdraw_amount.value}`
            success.style.display = 'none'
            
    }
}

form.addEventListener('submit', withdraw)






















































