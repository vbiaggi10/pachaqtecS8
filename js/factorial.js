// Factorial de un numero

const n = Number(prompt("ingrese numero"));
// Si queremos utilizar el prompt en numeros, hay que parsearlo tanto con Number, parseInt, parseFloat, dependiendo de su uso
// Tambien se puede parsear de otra manera con el "+". se le llama conversion implicita
// aqui un documento => http://notasjs.blogspot.com/2013/06/funciones-parseint-parsefloat-number-y.html?m=1

console.log(factorialFunc(n));

function factorialFunc(a) {
  let temp = 1;
  // variable temporal en ambito local

  // Bucle for
  for (let i = 1; i <= a; i++) {
    // let i = 1 : es el iterador que declaramos como 1
    // i <= a : realizar la iteracion hasta que i sea menor igual a "a"
    // i++ : con el paso de 1 en 1

    temp = temp * i;
  }
  return temp;
}

const recursiveFactorial = (a) => {
  // 5! = 5 * 4 * 3 * 2 * 1
  // 5! = 5 * 4!
  // n! = n * (n-1)!

  // 0! = 1

  // Yo puedo volver a llamar mi funcion para reutilizarla
  // a esto se le llama RECURSIVIDAD
  // La recursividad consiste en funciones que se llaman a sí mismas, evitando el uso de bucles y otros iteradores.

  if (a === 0) {
    return 1;
  }

  return n * recursiveFactorial(a - 1);
};
