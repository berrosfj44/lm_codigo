function mostrar(num){
    var texto = "<h3> Tabla del " + num + "</h3>";

    for (let i = 1; i <= 10; i++) {
        texto = texto + num + " * " + i + " = " + (num*i) + "</br>"; 
    }

    document.getElementById("res").innerHTML = texto;
}