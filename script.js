function operate (operator,stnNum1,strNum2) {
    const Num1 = Number(stnNum1);
    const Num2 = Number(strNum2);
    if (operator == 'add'){
        return add(Num1,Num2);
    }else if (operator == 'subtract') {
        return subtract(Num1,Num2);
    } else if (operator == 'multiply') {
        return multiply(Num1,Num2);
    } else if (operator == 'divide') {
        return divide(Num1,Num2);
    }
}

function add (addend1,addend2){
    let sum = addend1+addend2
    const MAX_NUM = 99999999;
    if (sum > MAX_NUM){
        return MAX_NUM;
    } else {
        return sum;
    }
    }
function subtract (minuend,subtrahend) {
    let difference = minuend-subtrahend;
    const MIN_NUM = -9999999
    if (difference < MIN_NUM){
        return MIN_NUM;
    } else {
        return difference;
    }
}
function multiply (multiplicand,multiplier) {
    let product = multiplicand*multiplier;
    const MAX_NUM = 99999999;
    if (product > MAX_NUM){
        return MAX_NUM;
    } else {
        return product;
    }
    }

    function divide (dividend,divisor) {
    if (divisor == 0) 
        {return 'Nice try';
    } else {
        let quotient = (dividend/divisor);
        if (quotient.toString().length > 7) {
            if (quotient.toPrecision(7).toString().startsWith('0')) {
                return quotient.toPrecision(6);
            } else if (quotient.toPrecision(7).toString().includes('e')){
                return quotient.toPrecision(4)
            } else {
                return quotient.toPrecision(7);
            }
        } else {
            return quotient;
        }
    }
}

function pressButton () {
    let currentNumber = '0';
    let operator;
    let storedNumber;
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'number'){
               currentNumber = pressNumberButton(currentNumber,button.id);
            } else if (button.className == 'operator'){
                ({ operator, argument1: storedNumber, number: currentNumber } = pressOperatorButton(operator, storedNumber, currentNumber, button.id));
            } else if (button.id == 'equal'){
                pressEquals (operator, storedNumber, currentNumber);
            } else if(button.id == 'clear') {
                ({ number: currentNumber, operator, argument1: storedNumber } = pressClear(currentNumber, operator, storedNumber));
                return populateDisplay(currentNumber);
            } else if(button.id == 'decimal') {
                currentNumber = pressDecimal(currentNumber);
            } else if(button.id == 'backspace'){
                currentNumber = pressBackspace (currentNumber);
            }
        })
    })
    document.addEventListener('keydown', pressKey)
    function pressKey(e) {
        if (e.key >= 0 && e.key <= 9) {
            currentNumber = pressNumberButton(currentNumber,e.key);
        } else {
            if (e.key == '+') {
                ({ operator, argument1: storedNumber, number: currentNumber } = pressOperatorButton(operator, storedNumber, currentNumber, 'add'));
            } else if (e.key == '-') {
                ({ operator, argument1: storedNumber, number: currentNumber } = pressOperatorButton(operator, storedNumber, currentNumber, 'subtract'));
            } else if (e.key == '*' ) {
                ({ operator, argument1: storedNumber, number: currentNumber } = pressOperatorButton(operator, storedNumber, currentNumber, 'multiply'));
            } else if (e.key == '/' ) {
                ({ operator, argument1: storedNumber, number: currentNumber } = pressOperatorButton(operator, storedNumber, currentNumber, 'divide'));
            } else if (e.key == '=' || e.key == 'Enter'){
                pressEquals (operator, storedNumber, currentNumber);
            } else if(e.key == '.') {
               currentNumber = pressDecimal(currentNumber);
            } else if(e.key == 'Backspace'){
                currentNumber = pressBackspace (currentNumber);
            }
        }
    }
}

function pressNumberButton(currentNumber,button) {
    if (currentNumber == '0') {
        currentNumber = button;
        populateDisplay(currentNumber);
        return currentNumber;
    } else if (currentNumber.length < 8){
        currentNumber += button;
        populateDisplay(currentNumber);
        console.log(typeof currentNumber);
        return currentNumber;       
    } else {
        populateDisplay(currentNumber);
        return currentNumber;  
    }
}

function pressOperatorButton(operator, storedNumber, currentNumber, button) {
    if (operator == undefined) {
        if (storedNumber == undefined) {
            storedNumber = currentNumber;
            operator = button;
            currentNumber = "";
        } else {
            operator = button
            currentNumber = "";
        }
    } else {
        let answer = operate(operator, storedNumber, currentNumber);
        storedNumber = answer;
        populateDisplay(answer);
        operator = button;
        currentNumber = "";
    }
    return { operator, argument1: storedNumber, number: currentNumber };
}

function pressEquals (operator, storedNumber, currentNumber) {
    if (operator != undefined) {    
        answer = operate(operator,storedNumber,currentNumber); 
        storedNumber = answer;
        currentNumber = answer;
        operator = undefined;
        return populateDisplay(answer);
    } else {

    }
}

function pressClear(currentNumber, operator, storedNumber) {
    currentNumber = 0;
    operator = undefined;
    storedNumber = undefined;
    return { number: currentNumber, operator, argument1: storedNumber };
}

function pressDecimal(currentNumber) {
    if (currentNumber.includes('.')) {
        return currentNumber;
    } else {
        currentNumber += '.';
        populateDisplay(currentNumber);
        return currentNumber;
    }
}

function pressBackspace (currentNumber) {
    currentNumber = currentNumber.substr(0,currentNumber.length-1);
    populateDisplay(currentNumber);
    return currentNumber;
}

function populateDisplay (currentNumber) {
    const display = document.querySelector('#display');
    display.textContent = currentNumber;
}

pressButton();
populateDisplay(0);