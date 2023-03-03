//condicionales//

let usuario1 = "Pedro";
let usuario2 = "Gabriela";

let nombreUsuario = prompt("Ingrese su nombre de usuario");

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Nombre de usuario incorrecto.");
}

//switch//

let mesNacimiento = Number(prompt("Ingrese tu mes de nacimiento en números"));

switch (mesNacimiento) {
    case 1:
        alert("Enero");
        break;
    case 2:
        alert("Febrero");
        break;
    case 3:
        alert("Marzo");
        break;
    case 4:
        alert("Abril");
        break;
    case 5:
        alert("Mayo");
        break;
    case 6:
        alert("Junio");
        break;
    case 7:
        alert("Julio");
        break;
    case 8:
        alert("Agosto");
    case 9:
        alert("Septiembre");
        break;
    case 10:
        alert("Octubre");
        break;
    case 11:
        alert("Noviembre");
        break;
    case 12:
        alert("Diciembre");
        break;
    default:
        alert("No existe mes asociado a ese número");
}

//ciclos//

//for anidado//

for (let x = 0; x < 10; x++) {
        console.log("Ciclo número " + x);
        for (let y = 0; y < 5; y++) {
            console.log("Ciclo secundario " + y);
        }
}


//funciones//

//anonimas//

let nombre = [usuario1,usuario2];

const saludar = function(nombre) {
    console.log("Hola " + usuario1);
    console.log("Hola " + usuario2);
}

saludar(nombre);




