function operate(numOne, numTwo, operator){
    switch(operator){

        case("+"):
            numOne = parseFloat(numOne)
            numTwo = parseFloat(numTwo)
            return add(numOne, numTwo)
        break;

        case("-"):
            return subtract(numOne, numTwo)
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

let operator
const buttons = document.querySelectorAll(".button")
buttons.forEach(button => button.addEventListener('click', function(e){

    const display = document.querySelector(".display");
    const button = e.target.textContent;

   
    
    

    switch(button){

        case("+"):
            operator = "+"
            numOne = display.textContent
            display.textContent = ""
        break;

        case("-"):
            operator = "-"
            numOne = display.textContent
            display.textContent = ""
        break;

        case("x"):
            operator = "*"
            numOne = display.textContent
            display.textContent = ""
        break;

        case("/"):
            operator = "/"
            numOne = display.textContent
            display.textContent = ""
        break;

        case("="):
            numTwo = display.textContent
            result = operate(numOne, numTwo, operator)
            display.textContent = result
            
        break;

        default:
            
                display.textContent = display.textContent + button
            
            

            
    }

   

    
}))