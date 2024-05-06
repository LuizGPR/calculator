const display = document.getElementById("calculatorDisplay");
let stValue = 0, ndValue = 0, rdValue = 0, oprValue;
display.innerText = '0';

function insert(input){
    let displayLastChar = display.innerText[display.innerText.length-1];
    if((displayLastChar === '0' && display.innerText.length === 1) || display.value === Infinity || isNaN(display.value)){
        display.innerText = input;
        display.value = parseFloat(display.innerText);
    } else {
        display.innerText += input;
        display.value = parseFloat(display.innerText);
    }
}

function getValue(opr){
    oprValue = opr;
    stValue = display.value;
    display.innerText = '0';
    display.value = 0;
}

function calculate(){
    if(display.innerText === '0'){
        ndValue = stValue;
    } else {
    ndValue = display.value;
    }
    switch (oprValue){
        case '+':
            rdValue = stValue + ndValue;
            break
        case '-':
            rdValue = stValue - ndValue;
            break
        case '*':
            rdValue = stValue * ndValue;
            break
        case '/':
            rdValue = stValue / ndValue;
            break
        case '^':
            rdValue = stValue ** ndValue;
            break
    }
    if(rdValue === 0){
        rdValue = stValue;
    } else {
        display.innerText = rdValue;
        display.value = rdValue;
        stValue = rdValue;
    }
}

function negative(){
    display.value = -(display.value);
}

function clearDisplay(){
    display.innerText = '0'; display.value = 0; stValue = 0; ndValue = 0; rdValue = 0;
}