let buttonClick = 0;

function btnClick(item, btn) {
    // for selected button disabled
    const button = document.getElementById(btn);
    button.disabled = true;
    button.style.backgroundColor = '#A2A9AF';

    // button click count
    buttonClick ++;
    if(buttonClick > 5) {
        button.disabled = false;
        button.style.backgroundColor = '#015196';
        alert("You have riched Maximum Selection");
        buttonClick = 5;
        return;
    }
    
    // inserting the names of player in selected fields 
    const playerField = document.getElementById(item);
    const selectedField = document.getElementById('selected-field');
    const creatList = document.createElement('p');
    let number = buttonClick;
    creatList.innerText = number +". " + playerField.innerText;
    selectedField.appendChild(creatList);
    
    
}


// for calculate selected player expences 
document.getElementById('calculate-field').addEventListener('click', function(){
  
    // this functon is called from comon.js file, this will return input value
    const amountPerPlayer = getInputFieldValueById('amount-per-player-field'); 
    const playerExpenses = buttonClick * amountPerPlayer;
    
    // inserting the Expences into the Expenses field  
    const playerExpensesFiled = document.getElementById('player-expenses');
    playerExpensesFiled.innerText = playerExpenses;

});

// for total claculation 
document.getElementById('btn-total-calculation').addEventListener('click', function(){
    const managerFieldValue = getInputFieldValueById('manager-field');
    const coahFieldValue = getInputFieldValueById('coah-field');
    const playerExpenses = getTextFieldValueById('player-expenses');

    // total cost
    const total = managerFieldValue + coahFieldValue + playerExpenses;

    const totalField = document.getElementById('total-field');
    totalField.innerText = total;
    
});