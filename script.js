const display = document.getElementById("calculatorDisplay");
let stValue = 0, ndValue = 0, rdValue = 0, oprValue;
display.value = 0;

function insert(input){
    let displayLastChar = display.innerText[display.innerText.length-1];
    if(display.value === 0 || display.value === Infinity || isNaN(display.value)){
        display.innerText = input;
        display.value = parseFloat(display.innerText);
    } else {
        display.innerText += input;
        display.value = Number(display.innerText);
    }
    if ((displayLastChar === '.' && display.innerText.length === 1)){
        display.innerText = `0.${input}`
        display.value = input/10;
    }
    if(stValue !== 0 ){
        ndValue = display.value;
    }
}

function getValue(opr){
    oprValue = opr;
    stValue = display.value;
    display.innerText = '0';
    display.value = 0;
}

function calculate(){
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
        case undefined:
            rdValue
    }
    if(!(Number.isInteger(rdValue))){
        display.innerText = rdValue.toFixed(3);
        display.value = rdValue;
    }
    if(Number.isInteger(rdValue)){
        display.innerText = rdValue;
        display.value = rdValue;
    }
    stValue = rdValue;
}

function negative(){
    display.value = -(display.value);
    display.innerText = `-${display.innerText}`
    ndValue = display.value
}

function clearDisplay(){
    display.innerText = ''; display.value = 0; stValue = 0; ndValue = 0; rdValue = 0;
}

function eraseDigit(){
    stValue = ndValue
    display.innerText = display.innerText.slice(0, display.innerText.length-1);
    display.value = parseFloat(display.innerText)
    ndValue = display.value;
}