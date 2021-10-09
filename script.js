function operate (operator,argument1,argument2) {
    argument1 = parseInt(argument1);
    argument2 = parseInt(argument2);
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
divide = (argument1,argument2) => argument1/argument2;

function pressButton () {
    let number = ""
    let operator = "";
    let argument1;
    let argument2;
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            //Below runs when 
            if (button.className == 'number'){
                number += button.id
                return populateDisplay(number);
            } else if (button.className == 'operator'){
                if (argument1 == undefined){
                    argument1 = number;
                    operator = button.id;
                    number = "";
                } else {
                    argument2 = number;
                    operator = button.id;
                    number = "";
                }
            } else if (button.id == 'equal'){
                if (argument2 == undefined){
                    let answer = operate(operator,argument1,number); //this result should become argument1
                    argument1 = answer;
                    return populateDisplay(answer);
                } else {
                    let answer = operate(operator,argument1,argument2); //this result should become argument1
                    argument1 = answer;
                    return populateDisplay(answer); 
                }
            }
        })
    })
}

function populateDisplay (number) {
    const display = document.querySelector('#display');
    display.textContent = number;
}

pressButton();