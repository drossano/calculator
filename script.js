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
divide = (argument1,argument2) => Number(Math.round(argument1/argument2 + 'e6')+ 'e-6');

function pressButton () {
    let number = ""
    let operator;
    let argument1;
    let argument2;
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'number'){
                while (number.length < 8) {
                    number += button.id
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
                    let answer = operate(operator,argument1,number); 
                    argument1 = answer;
                    return populateDisplay(answer);    
            }
        })
    })
}

function populateDisplay (number) {
    const display = document.querySelector('#display');
    display.textContent = number;
}

pressButton();