function adivinar() {
    var num = document.getElementById("numero").value;
    var ale = Math.floor(Math.random() * 10);
    var int = 10
    if (num == ale && int > 0 ) {
        document.getElementById("res").innerHTML = "<p> El numero es correcto, el numero aleatorio era </p>" + ale;
    }else if (num > ale && int > 0) {
        var int = int - 1;
        document.getElementById("res").innerHTML = "<p> El numero introducido es mayor, el numero aleatorio era </p>" + ale + "<p>te quedan </p>" + int + "<p>intentos</p>";
    } else if (num < ale && int > 0) {
        var int = int - 1;
        document.getElementById("res").innerHTML = "<p> El numero introducido es menor, el numero aleatorio era </p>" + ale + (int-1) + "<p>te quedan </p>" + int + "<p>intentos</p>";
    } else {
        document.getElementById("res").innerHTML = "<p>Te quedaste sin intentos</p>"
    }
}