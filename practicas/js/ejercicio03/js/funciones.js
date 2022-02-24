function calcularedad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad + 365;


    var date = new Date();
    var year = date.getFullYear();

    var año = date - year
    document.getElementById("resultado").innerHTML = "Buenas tardes " + nombre + ". Usted tiene " + año + " años, que son " + dias + " dias, Gracias."
}
