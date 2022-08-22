function getInputFieldValueById(fieldId) {
    const amountPerPlayerField = document.getElementById(fieldId);
    const amountPerPlayerString = amountPerPlayerField.value;
    const amountPerPlayer = parseFloat(amountPerPlayerString);
    if(isNaN(amountPerPlayer) || amountPerPlayer < 0) {
        alert("Error! you can not input Negetive Number or String. Please insert any Positive number. Thank you.");
        amountPerPlayerField.value = '';
        return 0;
    } else {
        return amountPerPlayer;
    }
    
}

function getTextFieldValueById(fieldId) {
    const playerExpensesField = document.getElementById(fieldId);
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseFloat(playerExpensesString);
    return playerExpenses;
}