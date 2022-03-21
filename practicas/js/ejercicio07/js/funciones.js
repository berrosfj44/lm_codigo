function sumar() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;

    var suma = parseFloat(num1)+parseFloat(num2);  

    document.getElementById("res").innerHTML = suma;
}

function restar() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;

    var resta = num1 - num2;

    document.getElementById("res").innerHTML = resta;
}

function multiplicar() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;

    var multiplica = num1 * num2;

    document.getElementById("res").innerHTML = multiplica; 
}

function dividir() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;

    var divide = num1 / num2;

    document.getElementById("res").innerHTML = divide;
} 


function calcular_profesor() {

    var resultado = "";
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (op == "+") {
        resultado = eval(num1 + num2);
    } else if (op == "-") {
        resultado = eva1(num1 - num2);
    } else if (op == "*") {
        resultado = eval(num1 * num2);
    } else if (op == "/") {
        resultado = eval(num1 / num2);
    }
    document.getElementById("res").value = resultado;
} 