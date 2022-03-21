function adivinar() {
    var num = document.getElementById("numero").value;
    var ale = Math.floor(Math.random() * 10);

    if (num == ale) {
        document.getElementById("res").innerHTML = "<p> El numero es correcto, el numero aleatorio era </p>" + ale;
    }else if (num > ale) {
        document.getElementById("res").innerHTML = "<p> El numero introducido es mayor, el numero aleatorio era </p>" + ale;
    } else if (num < ale) {
        document.getElementById("res").innerHTML = "<p> El numero introducido es menor, el numero aleatorio era </p>" + ale;
    }
}