/*=====================================
 CONDICIONES IF 
======================================*/

var numero1 = 4;
var numero2 = 4;

if (numero1 > numero2) {
    console.log("numero1 es mayor que numero 2");
} else if (numero1 === numero2) {
    console.log("son iguales");
} else {
    console.log("no son iguales, numero1 es menor a numero2");
}

/*=====================================
 CONDICIONES CAMBIOS
======================================*/

var dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("repasar javaScript");
        break;
    case "jueves":
        console.log("ir a pasear el perro");
        break;
    case "miercoles":
        console.log("no jugar");
        break;
    case "sabado":
        console.log("hacer de tod")
        break;

    default:
        console.log("no quiero hacer nada");
}