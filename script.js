function operate(numOne, numTwo, operator){
    switch(operator){

        case("+"):
            return add(numOne, numTwo)
        break;

        case("-"):
            return divide(numOne, numTwo)
        break;

        case("*"):
            return multiply(numOne, numTwo)
        break;

        case("/"):
            return divide(numOne, numTwo)
        break;
    }
}

function add(numOne, numTwo){
    return (numOne + numTwo)
}

function subtract(numOne, numTwo){
    return (numOne - numTwo)
}

function multiply(numOne, numTwo){
    return (numOne * numTwo)
}

function divide(numOne, numTwo){
    return (numOne / numTwo)
}

const buttons = document.querySelectorAll(".button")
buttons.forEach(button => button.addEventListener('click', function(e){
    console.log(e)
}))