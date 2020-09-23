//HERON'S FORMULA ASSIGNMENT

//Event Listeners
document.getElementById('btn1').addEventListener('click', Calc)

//Event Function
function Calc() {
    //Get Inputs
    let sideA = Number(document.getElementById('number1').value);
    let sideB = Number(document.getElementById('number2').value);
    let sideC = Number(document.getElementById('number3').value);

    //Process
    let total = heronsFormula(sideA, sideB, sideC)

    //Output
    document.getElementById('span1').innerHTML = total;
}

function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    return area;
}



