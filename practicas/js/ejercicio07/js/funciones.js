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