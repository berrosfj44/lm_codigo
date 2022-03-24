function calcular () {
    var viaje = document.getElementById("viaje").value;
    var kilometro = document.getElementById("kilometros").value;
    var precio = document.getElementById("gasolina").value;

    calculo = kilometro * precio;
    document.getElementById("res").innerHTML = precio;
    document.getElementById("res").innerHTML = "<br/>" + "El viaje de " + viaje + " de " + kilometro  + " kilometro a " +  precio + " el precio del kilómetro hace un gasto total de " + calculo;
}