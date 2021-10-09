add = (argument1,argument2) => argument1+argument2;
subtract = (argument1,argument2) => argument1-argument2;
multiply = (argument1,argument2) => argument1*argument2;
divide = (argument1,argument2) => argument1/argument2;

function operate (operator,a,b) {
    if (operator == add){
      return add(a,b);
    }else if (operator == subtract) {
        return subtract(a,b);
    } else if (operator == multiply) {
        return multiply(a,b);
    } else if (operator == divide) {
        return divide(a,b);
    }
}

function pressButton () {
    let number = ""
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'number'){
                number += button.id
                return populateDisplay(number);
            } else if (button.className == 'operator'){
                return pressOperator(number);
            }
        })
    })
}

function populateDisplay (number) {
    const display = document.querySelector('#display');
    display.textContent = number;
    return pressOperator(number);
}

function pressOperator (number) {
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((button) =>{
        button.addEventListener('click', () =>{
            operation = {
                operator: button.id,
                arg1: number,
            }
        })
    });
}

pressButton();