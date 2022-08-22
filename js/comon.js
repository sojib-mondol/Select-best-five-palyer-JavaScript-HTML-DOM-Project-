function getInputFieldValueById(fieldId) {
    const amountPerPlayerField = document.getElementById(fieldId);
    const amountPerPlayerString = amountPerPlayerField.value;
    const amountPerPlayer = parseFloat(amountPerPlayerString);
    return amountPerPlayer;
}

function getTextFieldValueById(fieldId) {
    const playerExpensesField = document.getElementById(fieldId);
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseFloat(playerExpensesString);
    return playerExpenses;
}