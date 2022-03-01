function numero() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;

if (numero1 > numero2) {
    var mayor = numero1;
}
else if (numero2 > numero1) {
    var mayor = numero2;
}

if (numero1 < numero2) {
    var menor = numero1;
}
else if (numero1 < numero2) {
    var menor = numero2;
}
document.getElementById("mayor").innerHTML = mayor; 
document.getElementById("menor").innerHTML = menor; 

}

function numero_clase() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    var resultado = ""
    
    if (num1 > num2) {
        resultado = num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        resultado = num2 + " es mayor que " + num1;
    } else {
        resultado = num1 + " es iguañ que " + num2;
    }

    document.getElementById("res").innerHTML = resultado;
}