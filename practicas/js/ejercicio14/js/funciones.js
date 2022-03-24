function calcular(numero) {
        for (let i = 2; i <= numero; i++) {
        let resto = numero%i;

        if (numero%i == 2) {
            document.getElementById("res").innerHTML = numero + " Es primo";
        }

    } 
}