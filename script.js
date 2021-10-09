function operate (operator,a,b) {
    a = parseInt(a);
    b = parseInt(b);
    if (operator == 'add'){
      let answer =  add(a,b);
      return populateDisplay(answer);
    }else if (operator == 'subtract') {
        let answer =  subtract(a,b);
        return populateDisplay(answer);
    } else if (operator == 'multiply') {
        let answer =  multiply(a,b);
        return populateDisplay(answer);
    } else if (operator == 'divide') {
        let answer =  divide(a,b);
        return populateDisplay(answer);
    }
}

add = (argument1,argument2) =>argument1+argument2;
subtract = (argument1,argument2) => argument1-argument2;
multiply = (argument1,argument2) => argument1*argument2;
divide = (argument1,argument2) => argument1/argument2;

function pressButton () {
    let number = ""
    let operator = "";
    let arg1 = ""
    const button = document.querySelectorAll('button');
    button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'number'){
                number += button.id
                return populateDisplay(number);
            } else if (button.className == 'operator'){
                arg1 = number;
                operator = button.id;
                number = "";
            } else if (button.id == 'equal'){
                return operate(operator,arg1,number);
            }
        })
    })
}

function populateDisplay (number) {
    const display = document.querySelector('#display');
    display.textContent = number;
}

pressButton();