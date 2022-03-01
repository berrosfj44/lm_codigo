function frase() {
    var frase = document.getElementById("frase").value;
    var veces = document.getElementById("veces").value;

    var resultado = "";

    for (let i = 0; i < veces; i++){
        resultado = resultado + (i+1) + ". " + frase + "<br>";
}

document.getElementById("res").innerHTML = resultado;

}