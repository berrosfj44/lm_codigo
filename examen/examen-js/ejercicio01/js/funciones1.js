function validar() {
    var Error = "";
    var str = document.getElementById("login").value;
    var login = document.getElementById("login");
    var tel = document.getElementById("telefono");
    var fin = document.getElementById("web").value;
    var web = document.getElementById("web");


    if (login.value == null || login.value.length == 0) {
        Error = "login: campo vacío <br/>";
    } else if (login.value.length < 5) {
        Error = "login: Nombre no válido <br/>";
    }
    
    if (tel.value == null || tel.value.length == 0) {
        Error = Error + "Teléfono: campo vacío <br/>";
    } else if (tel.value.length != 9) {
        Error = Error + "Teléfono: debe tener 9 cifras <br/>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
        Error = Error + "Teléfono: debe empezar por 6 o 9 <br/>";
    }

    if (web.value == null || web.value.length == 0) {
        Error = Error + "web: campo vacío";
    } else if (!fin.startsWith("www.") || !fin.endsWith(".es")) {
        Error = Error + "web: web no válida";
    }
    
    if (Error.length == 0) {
        return true;
    } else {
        res(Error);
        return false;
    }

}

function res(Error) {
    document.getElementById("res").innerHTML = Error;
}