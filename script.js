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