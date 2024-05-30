let currentInput='';

function appendnumber(number){
    currentInput += number;
    document.getElementById('result').value =  currentInput;
}
function operators(operator) {
    currentInput += operator;
    document.getElementById('result').value = currentInput;
}

function calc(){
    const result = eval(currentInput);
    document.getElementById('result').value = result;
    currentInput =  result.toString();
}

function clearText() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function del(){
    value = document.getElementById("result").value;
    val = document.getElementById("result").value = value.slice(0, - 1); 
    currentInput = val;
    
}    

function modulo(){
    mult = eval(currentInput / 100);
    total = document.getElementById('result').value = mult;
    currentInput =  total;

}

function squareroot(){
    value = document.getElementById('result').value
    total = Math.sqrt(value)
    showTotal = document.getElementById('result').value = total;
    currentInput = showTotal
}

