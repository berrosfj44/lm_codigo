function calcular() {
    var resultado = "";
    var altura = parseInt.document.getElementById("altura").value;
    var peso = parseInt.document.getElementById("peso").value;

    var imc = peso / Math.pow(altura, 2);

    var texto = "";

    if ( imc < 18.5) {
        texto = "Peso insuficiente"
    } else if ( imc >= 18.5 && imc <= 24.9 ) {
        texto = "Normopeso";
    } else if (imc >= 25 && imc <= 26.9) {
        texto = "Sobrepeso grado I"
    } else if ( imc >= 27 && imc <= 29.9) {
        texto = "Sobrepeso grado II";
    } else if (imc >= 30 && imc <= 34.9) {
        texto = "Obesidad grado I";
    } else if ( imc >= 35 && imc <= ) {
        
    }
}