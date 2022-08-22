let buttonClick = 0;

function btnClick(item, btn) {
    // for selected button disabled
    const button = document.getElementById(btn);
    button.disabled = true;
    button.style.backgroundColor = '#A2A9AF';


    const playerField = document.getElementById(item);
    console.log('clicked');
    
    // button click count
    buttonClick ++;
    if(buttonClick == 5) {
        alert("You have riched Maximum Selection")
        return;
    }
}