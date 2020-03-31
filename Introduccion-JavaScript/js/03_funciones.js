  /*===================================== FUNCIONES SIN PARAMETROS ======================================*/

  function saludando() {
      console.log("saludando insectos", "de mierda");

  }
  saludando();

  /*=====================================
   FUNCIONES CON PARAMETROS
   ======================================*/
  function operacion(numer1, numero2) {
      var resultado = numer1 * numero2;
      console.log("resultado multiplicacion ==", resultado);

  }
  operacion(80, 2);

  /*=====================================
   FUNCIONES CON RETORNO SIN PARAMETROS
   ======================================*/

  function retorn1() {
      var numero = 4;
      return numero;
  }
  console.log(retorn1());

  /*=====================================
   FUNCIONES CON RETORNO CON PARAMETROS
   ======================================*/

  function return2(numero2) {
      return numero2;
  }
  console.log(return2(20));