/*=============================================
VARIABLES
=============================================*/

// variabloes de tipo numericas
var numero = 10;
console.log("numero", numero);

// variables de tipo texto
var palabra = "probando intorduccion a javaScript";
console.log("palabra", palabra);

/// variables Booleanas
var Booleanas = false;
console.log("Booleanas", Booleanas);

// variables de tipo Array
var arreglo = ["1", "2", palabra, Booleanas];
console.log("arreglo", arreglo);
console.log("arreglo", arreglo[0]);

// variables de tipo objeto
var auto = {
    color: "negro",
    marca: "chevrolet",
    año: "2020"
}
console.log("auto", auto);
console.log("auto", auto.marca);

// variables DOM
var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "600px";
caja.style.height = "600px";
caja.style.background = "green";

var cajas = document.querySelectorAll(".cajas")
console.log("cajas", cajas)