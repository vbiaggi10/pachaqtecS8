// Realizar un programa  en el que se pueda ingresar 2 numeros y ejecutar la operacion que se deba realizar

let continuar = "s";

// Bucle Do While, para preguntar si deseamos continuar con los calculos
do {
  const n1 = Number(prompt("Ingrese el primer numero"));
  const n2 = Number(prompt("Ingrese el segundo numero"));
  const operacion = prompt(
    "Ingrese que operacion desea realizar (suma/resta/multiplicacion/division)"
  );

  // Si queremos utilizar el prompt en numeros, hay que parsearlo tanto con Number, parseInt, parseFloat, dependiendo de su uso
  // Tambien se puede parsear de otra manera con el "+". se le llama conversion implicita
  // aqui un documento => http://notasjs.blogspot.com/2013/06/funciones-parseint-parsefloat-number-y.html?m=1

  let resultado = 0;
  // Declaramos nuestra variable resultado

  // Utilizamos Switch con nuestros diferentes casos
  switch (operacion) {
    case "suma":
      resultado = n1 + n2;
      break;
    case "resta":
      resultado = n1 - n2;
      break;
    case "multiplicacion":
      resultado = n1 * n2;
      break;
    case "division":
      resultado = n1 / n2;
      break;
    default:
      break;
  }

  // Mostramos por alert el resultado
  alert("El resultado de " + operacion + " es " + resultado);

  // Preguntamos si queremos continuar
  continuar = prompt("desea continuar? (s/n)?");
} while (continuar == "s");
