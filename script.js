let operator
let count = 0
let equalcount = 0
let numOne
let NumTwo
let operating

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button")
const clearButton = document.querySelector(".clear")
const offButton = document.querySelector("#off")
const onButton = document.querySelector("#on")
const controls = document.querySelectorAll(".controls")

buttons.forEach(button => button.addEventListener('mouseover', hoverOn))
buttons.forEach(button => button.addEventListener('mouseout', hoverOff))
buttons.forEach(button => button.addEventListener('click', transform));
buttons.forEach(button => button.addEventListener('transitionend', removeTransform))

controls.forEach(control => control.addEventListener('mouseover', hoverOn))
controls.forEach(control => control.addEventListener('mouseout', hoverOff))
controls.forEach(control => control.addEventListener('click', transform));
controls.forEach(control => control.addEventListener('transitionend', removeTransform))

function removeTransform(e){
    e.target.style.transform = "scale(1.0)"
}

function transform(e){
    e.target.style.transform = "scale(0.9)"
}



function hoverOff(e){
    e.target.style.borderColor = "black"
}

function hoverOn(e){
    e.target.style.borderColor = "yellow"
}

offButton.addEventListener('click', function(){
    buttons.forEach(button => button.style.background = "grey")
    clearButton.style.background = "grey"
    offButton.style.background = "grey"
    onButton.style.background = "grey"
    display.textContent = ""
    count = 0
    equalcount = 0
    numOne = ""
    numTwo = ""
    operating = "false"
    operator = ""
    buttons.forEach(button => button.removeEventListener('click', Calculator));
    buttons.forEach(button => button.removeEventListener('mouseover', hoverOn))
    buttons.forEach(button => button.removeEventListener('mouseout', hoverOff))
    buttons.forEach(button => button.removeEventListener('click', transform));
    controls.forEach(control => control.removeEventListener('mouseover', hoverOn))
    controls.forEach(control => control.removeEventListener('mouseout', hoverOff))
    controls.forEach(control => control.removeEventListener('click', transform));
    offButton.style.borderColor = "black"
    
})


onButton.addEventListener('click', function(){
    buttons.forEach(button => button.style.background = "#e4ab3b")
    clearButton.style.background = "#e4ab3b"
    offButton.style.background = "#e4ab3b"
    onButton.style.background = "#e4ab3b"
    buttons.forEach(button => button.addEventListener('click', Calculator));
    buttons.forEach(button => button.addEventListener('mouseover', hoverOn))
    buttons.forEach(button => button.addEventListener('mouseout', hoverOff))
    buttons.forEach(button => button.addEventListener('click', transform));
    buttons.forEach(button => button.addEventListener('transitionend', removeTransform))
    controls.forEach(control => control.addEventListener('mouseover', hoverOn))
    controls.forEach(control => control.addEventListener('mouseout', hoverOff))
    controls.forEach(control => control.addEventListener('click', transform));
    controls.forEach(control => control.addEventListener('transitionend', removeTransform)) 
})

clearButton.addEventListener('click', function(){
    display.textContent = ""
    count = 0
    equalcount = 0
    numOne = ""
    numTwo = ""
    operating = "false"
    operator = ""
})

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
    count = count + 1
    return (numOne + numTwo)
}

function subtract(numOne, numTwo){
    count = count + 1
    return (numOne - numTwo)
}

function multiply(numOne, numTwo){
    count = count + 1
    return (numOne * numTwo)
}

function divide(numOne, numTwo){
    count = count + 1
    return (numOne / numTwo)
    
}

buttons.forEach(button => button.addEventListener('click', Calculator));

function Calculator(e){

    const button = e.target.textContent;

    switch(button){

        case("+"):

            if (count > 0){

                if(equalcount > 0){

                    equalcount--
                    numOne = display.textContent
                    display.textContent = ""
                    count++
                    operator = "+"
                    operating = "true"

                }else{

                    numTwo = display.textContent
                    result = operate(numOne, numTwo, operator)
                    numOne = result
                    display.textContent = result
                    operator = "+"
                    operating = "true"
                }
                
            } else{
                operator = "+"
                numOne = display.textContent
                display.textContent = ""
                count++
                
            }
        break;

        case("-"):

            if (count > 0){

                if(equalcount > 0){

                    equalcount--
                    numOne = display.textContent
                    display.textContent = ""
                    count++
                    operator = "-"
                    operating = "true"

                }else{

                    numTwo = display.textContent
                    result = operate(numOne, numTwo, operator)
                    numOne = result
                    display.textContent = result
                    operator = "-"
                    operating = "true"
                }
                   
            } else{

                operator = "-"
                numOne = display.textContent
                display.textContent = ""
                count++

            }
        break;

        case("x"):

            if (count > 0){
                
                if(equalcount > 0){

                    equalcount--
                    numOne = display.textContent
                    display.textContent = ""
                    count++
                    operator = "*"
                    operating = "true"

                }else{

                    numTwo = display.textContent
                    result = operate(numOne, numTwo, operator)
                    numOne = result
                    display.textContent = result
                    operator = "*"
                    operating = "true"
                }
                   
            } else{

                operator = "*"
                numOne = display.textContent
                display.textContent = ""
                count++
            }          
        break;

        case("/"):

            if (count > 0){
    
                if(equalcount > 0){

                    equalcount--
                    numOne = display.textContent
                    display.textContent = ""
                    count++
                    operator = "/"
                    operating = "true"

                }else{

                    numTwo = display.textContent
                    result = operate(numOne, numTwo, operator)
                    numOne = result
                    display.textContent = result
                    operator = "/"
                    operating = "true"
                }
                  
            } else{

                operator = "/"
                numOne = display.textContent
                display.textContent = ""
                count++
            }
        break;

        case("="):

            if (equalcount === 0){

                equalcount++
            }
            
            display.textContent = result    
        break;

        default:

            if(operating === "true"){

                display.textContent = ""
                operating = "false"

            }

            display.textContent = display.textContent + button
            numTwo = display.textContent
            result = operate(numOne, numTwo, operator)       
    }   
}