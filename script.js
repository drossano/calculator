function operate (operator,argument1,argument2) {
    argument1 = Number(argument1);
    argument2 = Number(argument2);
    if (operator == 'add'){
        return add(argument1,argument2);
    }else if (operator == 'subtract') {
        return subtract(argument1,argument2);
    } else if (operator == 'multiply') {
        return multiply(argument1,argument2);
    } else if (operator == 'divide') {
        return divide(argument1,argument2);
    }
}

add = (argument1,argument2) =>argument1+argument2;
subtract = (argument1,argument2) => argument1-argument2;
multiply = (argument1,argument2) => argument1*argument2;
function divide (argument1,argument2) {
    if (argument2 == 0) 
        {return 'Nice try';
    } else {
        let quotient = (argument1/argument2);
        if (quotient.toString().length > 7) {
            if (quotient.toPrecision(7).toString().startsWith('0')) {
                return quotient.toPrecision(6);
            } else {
                return quotient.toPrecision(7);
            }
        } else {
            return quotient;
        }
    }
}
function pressButton () {
    let number = ""
    let operator;
    let argument1;
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'number'){
                while (number.length < 8) {
                    number += button.id;
                    return populateDisplay(number);
                }
            } else if (button.className == 'operator'){
                if (operator == undefined){
                    if (argument1 == undefined){
                        argument1 = number;
                        operator = button.id;
                        number = "";
                    } else {
                        operator = button.id;
                        number = "";
                    }
                } else {
                    let answer = operate(operator,argument1,number); 
                    argument1 = answer;
                    populateDisplay(answer);
                    operator = button.id;
                    number = "";  
                }
            } else if (button.id == 'equal'){
                if (operator != undefined) {    
                    let answer = operate(operator,argument1,number); 
                    argument1 = answer;
                    number = answer;
                    operator = undefined;
                    return populateDisplay(answer);
                } else {

                }
            } else if(button.id == 'clear') {
                number = ""
                operator = undefined;
                argument1 = undefined;
                return populateDisplay(number);
            } else if(button.id == 'decimal') {
                if (number.includes('.')) {

                } else {
                    number += '.';
                    return populateDisplay(number);
                }
            } else if(button.id == 'backspace'){
                number = number.substr(0,number.length-1);
                return populateDisplay(number);
            }
        })
    })
    document.addEventListener('keydown', pressKey)
    function pressKey(e) {
        if (e.code.includes('Digit')) {
            while (number.length < 8) {
                number += e.key;
                return populateDisplay(number);
            }
        }
    }
}

function populateDisplay (number) {
    const display = document.querySelector('#display');
    display.textContent = number;
}

/* function pressNumberButton(number, buttonId) {
    while (number.length < 8) {
        number += buttonId;
        return populateDisplay(number);
    }
} */

pressButton();