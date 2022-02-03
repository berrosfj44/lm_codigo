function iniciar() {
    // alert(document.getElementById("usuario").value);
    /* var usu = prompt("Introduzca nombre:");
    alert("Hola " + usu); */

    /* var usu = prompt("Introduzca nombre:");
    document.getElementById("texto").innerHTML = "Hola " + usu + "<br/>";
    document.getElementById("texto").style = "font-weight: bold"; */
}

function mostrarmensaje() {
    document.getElementById("texto").innerHTML = "Hola";
    document.getElementById("texto").className = "bordeYcolor";
}
window.addEventListener("load",iniciar,false); /* llama a la funcion con el evento escuchando todo el rato la ventana */

