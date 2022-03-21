var mayor = 0
var menor = 0

function anadir(numero) {
    if (numero > mayor) {
        mayor = numero;
    }else if (numero < menor) {
        menor = numero;
    }

}

function final() {
    res = document.getElementById("res").innerHTML = mayor + "<br>" + menor
}