function sum(){
    let a  =+document.getElementById('num1').value 
    let b  = +document.getElementById('num2').value
    return "The Sum is : " + (a+b);
}

function multiply(){
    let a  =+document.getElementById('num1').value 
    let b  = +document.getElementById('num2').value
    return "The Product is : " + (a*b);
}

function divide(){
    let a  =+document.getElementById('num1').value 
    let b  = +document.getElementById('num2').value
    return "The Division is : " + (a/b);
}

function minus(){
    let a  =+document.getElementById('num1').value 
    let b  = +document.getElementById('num2').value
    return "The Subtraction is : " + (a-b);
}

function clears() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById("demo").innerHTML = "";
}