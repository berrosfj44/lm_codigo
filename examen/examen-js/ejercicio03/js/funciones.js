function calcular () {
    var viaje = document.getElementById("viaje").value;
    var kilometro = parseInt(document.getElementById("kilometros").value);
    var precio = parseInt(document.getElementById("gasolina").value);

    calculo = kilometro * precio;

    document.getElementById("res").innerHTML = "El viaje de " + viaje + kilometro + calculo;
}