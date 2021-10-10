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
    let number = 0;
    let operator;
    let argument1;
    let answer;
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'number'){
               number = pressNumberButton(number,button.id);
            } else if (button.className == 'operator'){
                ({ operator, argument1, number } = pressOperatorButton(operator, argument1, number, button.id));
            } else if (button.id == 'equal'){
                pressEquals (operator, argument1, number);
            } else if(button.id == 'clear') {
                ({ number, operator, argument1 } = pressClear(number, operator, argument1));
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
        if (e.key >= 0 && e.key <= 9) {
            number = pressNumberButton(number,e.key);
        } else {
            if (e.key == '+') {
                ({ operator, argument1, number } = pressOperatorButton(operator, argument1, number, 'add'));
            } else if (e.key == '-') {
                ({ operator, argument1, number } = pressOperatorButton(operator, argument1, number, 'subtract'));
            } else if (e.key == '*' ) {
                ({ operator, argument1, number } = pressOperatorButton(operator, argument1, number, 'multiply'));
            } else if (e.key == '/' ) {
                ({ operator, argument1, number } = pressOperatorButton(operator, argument1, number, 'divide'));
            } else if (e.key == '=' || e.key == 'Enter'){
                pressEquals (operator, argument1, number);
            } else if(e.key == '.') {
                if (number.includes('.')) {

                } else {
                    number += '.';
                    return populateDisplay(number);
                }
            } else if(e.key == 'Backspace'){
                number = number.substr(0,number.length-1);
                return populateDisplay(number);
            }
        }
    }
}

function pressClear(number, operator, argument1) {
    number = 0;
    operator = undefined;
    argument1 = undefined;
    return { number, operator, argument1 };
}

function pressOperatorButton(operator, argument1, number, button) {
    if (operator == undefined) {
        if (argument1 == undefined) {
            argument1 = number;
            operator = button;
            number = "";
        } else {
            operator = button
            number = "";
        }
    } else {
        let answer = operate(operator, argument1, number);
        argument1 = answer;
        populateDisplay(answer);
        operator = button;
        number = "";
    }
    return { operator, argument1, number };
}

function populateDisplay (number) {
    const display = document.querySelector('#display');
    display.textContent = number;
}

function pressNumberButton(number,button) {
    if (number == 0) {
        number = button;
        populateDisplay(number);
        return number;
    } else if (number.length < 8){
        number += button;
        populateDisplay(number);
        return number;       
    } else {
        populateDisplay(number);
        return number;  
    }
}

function pressEquals (operator, argument1, number) {
    if (operator != undefined) {    
        answer = operate(operator,argument1,number); 
        argument1 = answer;
        number = answer;
        operator = undefined;
        return populateDisplay(answer);
    } else {

    }
}

pressButton();
populateDisplay(0);