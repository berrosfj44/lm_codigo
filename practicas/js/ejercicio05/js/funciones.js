function numero() {
    var numero1 = parseInt.document.getElementById("numero1").value;
    var numero2 = parseInt.document.getElementById("numero2").value;
    var numero3 = parseInt.document.getElementById("numero3").value;

if (numero1 > numero2 & numero1 > numero3) {
    var mayor = numero1;
}
if (numero1 < numero2 & numero1 < numero3) {
    var menor = numero1;
    }
if (numero1 < numero2 & numero1 > numero3) {
    var centro = numero1;
    }

if (numero1 > numero2 & numero1 < numero3) {
    var centro = numero1;
    }
 



if (numero2 > numero1 & numero2 > numero3) {
    var mayor = numero2;
}
if (numero2 < numero1 & numero2 < numero3) {
    var menor = numero2;
    }

if (numero2 < numero1 & numero2 > numero3) {
    var centro = numero2;
    }

if (numero2 > numero1 & numero2 < numero3) {
    var centro = numero2;
    }
 



if (numero3 > numero2 & numero3 > numero1) {
    var mayor = numero3;
}
if (numero3 < numero2 & numero3 < numero1) {
    var menor = numero3;
    }

if (numero3 < numero2 & numero3 > numero1) {
    var centro = numero3;
    }

if (numero3 > numero2 & numero3 < numero1) {
    var centro = numero3;
    }
 

document.getElementById("mayor").innerHTML = mayor; 
document.getElementById("menor").innerHTML = menor; 
document.getElementById("central").innerHTML = central; 

}

function numero_clase() {
    var num1 = parseInt.document.getElementById("numero1").value;
    var num2 = parseInt.document.getElementById("numero2").value;
    var num3 = parseInt.document.getElementById("numero3").value;

    var mayor = "";
    var menor = "";
    var central = "";

    if ((num1 > num2) && (num1 > num3)) {
        mayor = num1;
        if (num2 > num3) {
            central = num2;
            menor = num3;
        } else {
            central = num3;
            menor = num2;
        }
    } else if ((num2 > num1) && (num2 < num3)) {
        mayor = num2;
        if (num1 > num3) {
            central = num1;
            menor = num3;
        } else {
            central = num3;
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 > num2) {
            central = num1;
            menor = num2;
        } else {
            central = num2;
            menor = num1;
        }
    }

resultado = "<li> El mayor es: "
            + mayor
            + "</li><li> El central es: "
            + central
            + "</li><li> el menor es: "
            + menor
            + "</li>";

document.getElementById("res").innerHTML = resultado
}